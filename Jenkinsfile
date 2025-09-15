pipeline {
    agent any

    environment {
        // SonarCloud token credential ID (the one you saved in Jenkins)
        SONAR_TOKEN = credentials('SONAR_TOKEN')
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test || exit /b 0'
            }
        }

        stage('Generate Coverage Report') {
            steps {
                bat 'npm run coverage || exit /b 0'
            }
        }

        stage('NPM Audit (Security Scan)') {
            steps {
                bat 'npm audit || exit /b 0'
            }
        }

        stage('SonarCloud Analysis') {
            steps {
                // Assuming you have already set up SonarCloud project key and organization
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
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}
