#!/bin/bash

set -ev

# echo ${TRAVIS_EVENT_TYPE};
#    + returns 'api' when manually triggering build
#    + returns 'push' when pushing to remote branch
echo "NIghtly tests running";
if [ "${TRAVIS_EVENT_TYPE}" = "cron" ]; then
    # run selenium tests here
    echo test;
fi
if [ "true" = "true" ]; then
    npm test
    echo "npm tests running";
fi