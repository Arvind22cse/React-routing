pipeline {
    agent any

    environment {
        IMAGE_NAME = 'arvindm2004/docker_app'
        TAG = 'latest'
        CONTAINER_NAME = 'docker_container'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git :'https://github.com/Arvind22cse/React-routing.git'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${TAG}")
                }
            }
        }

         stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${IMAGE_NAME}:latest
                    '''
                }
            }
        }

        stage('Remove Existing Container') {
            steps {
                script {
                    sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    """
                }
            }
        }

        stage('Deploy New Container') {
            steps {
                sh """
                docker run -d -p 3002:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}:${TAG}
                """
            }
        }
    }

    post {
        success {
            echo "🚀 Successfully deployed ${IMAGE_NAME}:${TAG} to local Docker!"
        }
        failure {
            echo "❌ CI/CD pipeline failed."
        }
    }
}
