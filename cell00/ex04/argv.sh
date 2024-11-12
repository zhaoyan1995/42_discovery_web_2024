#!/bin/sh
if [ $# -ne 0 ]
then
       if [ $# -eq 1 ]
       then
	       echo $1
       fi
       if [ $# -eq 2 ]
       then
	       echo $1
	       echo $2
       fi
       if [ $# -ge 3 ]
       then
	       echo $1
	       echo $2
	       echo $3   
       fi 
else
	echo "No arguments supplied"
fi








