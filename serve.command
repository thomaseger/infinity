#!/bin/sh
here="`dirname \"$0\"`"
echo "Serving $here for infinity..."
cd "$here"
python -m SimpleHTTPServer 8182
