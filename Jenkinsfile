pipeline {
    agent any

    tools {
         nodejs '24.2.0'
    }

    environment {
        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = 1
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/bhanu2922/VendorCloudTestPlaywright', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }

    post {
        always {
            deleteDir()
        }
    }
}
