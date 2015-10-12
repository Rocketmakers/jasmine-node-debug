#jasmine-node-debug

Debug your node apps using your version of jasmine tests
(Jasmine is not packaged by this component, but node-inspector is!)

- This package has been tested with latest versions of both node-inspector and jasmine
- It should be installed globally to provide you with a global command line

## Installation

```terminal
npm install -g jasmine-node-debug
```

## Usage:

You call it exactly like you would jasmine (effectively the args are passed directly to Jasmine)

e.g. If your specs are not in the default spec folder

```terminal
jasmine-node-debug JASMINE_CONFIG_PATH=other/spec/support/jasmine.json
```

or if they are in the defalt location


```terminal
jasmine-node-debug JASMINE_CONFIG_PATH=other/spec/support/jasmine.json
```
The console will inform you of the url to open in a browser of your choice.

You node app will break on the first line (--debug-brk)
