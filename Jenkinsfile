pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat  'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat  'npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build --prod'
            }
        }

        stage('Deploy to Docker') {
            steps {
                bat 'docker build -t frontend-image .'
                bat 'docker run -d -p 4200:80 --name frontend-container frontend-image'
            }
        }
    }

    post {
        success {
            echo 'Frontend pipeline completed successfully!'
        }
        failure {
            echo 'Frontend pipeline failed.'
        }
    }
}
