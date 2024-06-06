#!/bin/bash

# Function to multiply two numbers
multiply() {
    local num1=$1
    local num2=$2
    local result=$((num1 * num2))
    echo "The result of $num1 multiplied by $num2 is: $result"
}

# Check if two arguments are provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 <number1> <number2>"
    exit 1
fi

# Call the multiply function with the provided arguments
multiply $1 $2