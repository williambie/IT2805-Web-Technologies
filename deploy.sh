#!/usr/bin/env bash

export SSH_AUTHENTICATION_KEY=$(pwd)/id_rsa

bash ./ci/deployment.sh