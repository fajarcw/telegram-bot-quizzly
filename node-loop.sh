#!/bin/sh

OUTFILE=nodejs.out
ERRFILE=nodejs.err
CMD="npm run start-prod"

while true; do
  echo >> $OUTFILE
  echo >> $ERRFILE
  date >> $OUTFILE
  date >> $ERRFILE
  echo "Starting $CMD" >> $OUTFILE
  echo "Starting $CMD" >> $ERRFILE
  $CMD 1>>$OUTFILE 2>>$ERRFILE
done
