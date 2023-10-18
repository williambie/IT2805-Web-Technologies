#!/usr/bin/env bash

# This is a shell script to do automatic deployments to folk.ntnu.no
#
# The script expects the following environment variables to be available
#
# - $SSH_AUTHENTICATION_KEY the contents of the private SSH key to authenticate
#                           to folk.ntnu.no with

if [ -z "$SSH_AUTHENTICATION_KEY" ]; then
  echo "No authentication key specified"
  exit 1
fi

ssh -i "$SSH_AUTHENTICATION_KEY" -T matsjla@login.stud.ntnu.no << EOFSSH
pushd public_html
git fetch
git rebase origin/master
git rev-parse HEAD > revision.txt
popd
exit 0
EOFSSH
