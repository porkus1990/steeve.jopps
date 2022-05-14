FROM gitpod/workspace-full:latest

RUN bash -c ". .nvm/nvm.sh && nvm install 16.14 && nvm use 16.14 && nvm alias default 16.14"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix