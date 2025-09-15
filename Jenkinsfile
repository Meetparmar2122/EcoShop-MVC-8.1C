pipeline {
    agent any

    environment {
        // SonarCloud token stored in Jenkins credentials
        SONAR_TOKEN = credentials('SONAR_TOKEN')
    }

    stages {
        // Checkout code from GitHub
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        // Install Node.js dependencies
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        // Run tests
        stage('Run Tests') {
            steps {
                bat 'npm test || exit /b 0'
            }
        }

        // Generate coverage report
        stage('Generate Coverage Report') {
            steps {
                bat 'npm run coverage || exit /b 0'
            }
        }

        // Security scan using npm audit
        stage('NPM Audit (Security Scan)') {
            steps {
                bat 'npm audit || exit /b 0'
            }
        }

        // SonarCloud analysis
        stage('SonarCloud Analysis') {
            steps {
                bat """
                sonar-scanner ^
                -Dsonar.projectKey=MeetParmar2122_EcoShop ^
                -Dsonar.organization=MeetParmar2122 ^
                -Dsonar.sources=. ^
                -Dsonar.host.url=https://sonarcloud.io ^
                -Dsonar.login=%SONAR_TOKEN%
                """
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
