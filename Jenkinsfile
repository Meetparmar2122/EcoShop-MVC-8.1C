pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo "Stage 1: Build"
      }
    }
    stage('Unit & Integration Tests') {
      steps {
        echo "Stage 2: Unit & Integration Tests"
      }
    }
    stage('Code Analysis') {
      steps {
        echo "Stage 3: Code Analysis"
      }
    }
    stage('Security Scan') {
      steps {
        echo "Stage 4: Security Scan"
      }
    }
    stage('Deploy to Staging') {
      steps {
        echo "Stage 5: Deploy to Staging"
      }
    }
    stage('Integration Tests on Staging') {
      steps {
        echo "Stage 6: Integration Tests on Staging"
      }
    }
    stage('Deploy to Production') {
      steps {
        echo "Stage 7: Deploy to Production"
      }
    }
  }
}
