oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-package
$ cli-package COMMAND
running command...
$ cli-package (--version)
cli-package/0.0.0 darwin-arm64 node-v18.17.1
$ cli-package --help [COMMAND]
USAGE
  $ cli-package COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli-package help [COMMAND]`](#cli-package-help-command)
* [`cli-package plugins`](#cli-package-plugins)
* [`cli-package plugins add PLUGIN`](#cli-package-plugins-add-plugin)
* [`cli-package plugins:inspect PLUGIN...`](#cli-package-pluginsinspect-plugin)
* [`cli-package plugins install PLUGIN`](#cli-package-plugins-install-plugin)
* [`cli-package plugins link PATH`](#cli-package-plugins-link-path)
* [`cli-package plugins remove [PLUGIN]`](#cli-package-plugins-remove-plugin)
* [`cli-package plugins reset`](#cli-package-plugins-reset)
* [`cli-package plugins uninstall [PLUGIN]`](#cli-package-plugins-uninstall-plugin)
* [`cli-package plugins unlink [PLUGIN]`](#cli-package-plugins-unlink-plugin)
* [`cli-package plugins update`](#cli-package-plugins-update)

## `cli-package help [COMMAND]`

Display help for cli-package.

```
USAGE
  $ cli-package help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cli-package.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.21/src/commands/help.ts)_

## `cli-package plugins`

List installed plugins.

```
USAGE
  $ cli-package plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cli-package plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.11/src/commands/plugins/index.ts)_

## `cli-package plugins add PLUGIN`

Installs a plugin into cli-package.

```
USAGE
  $ cli-package plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into cli-package.

  Uses bundled npm executable to install plugins into /Users/kurtking/.local/share/cli-package

  Installation of a user-installed plugin will override a core plugin.

  Use the CLI_PACKAGE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CLI_PACKAGE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ cli-package plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ cli-package plugins add myplugin

  Install a plugin from a github url.

    $ cli-package plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ cli-package plugins add someuser/someplugin
```

## `cli-package plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cli-package plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cli-package plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.11/src/commands/plugins/inspect.ts)_

## `cli-package plugins install PLUGIN`

Installs a plugin into cli-package.

```
USAGE
  $ cli-package plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into cli-package.

  Uses bundled npm executable to install plugins into /Users/kurtking/.local/share/cli-package

  Installation of a user-installed plugin will override a core plugin.

  Use the CLI_PACKAGE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CLI_PACKAGE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ cli-package plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ cli-package plugins install myplugin

  Install a plugin from a github url.

    $ cli-package plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ cli-package plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.11/src/commands/plugins/install.ts)_

## `cli-package plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ cli-package plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cli-package plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.11/src/commands/plugins/link.ts)_

## `cli-package plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cli-package plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli-package plugins unlink
  $ cli-package plugins remove

EXAMPLES
  $ cli-package plugins remove myplugin
```

## `cli-package plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ cli-package plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.11/src/commands/plugins/reset.ts)_

## `cli-package plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cli-package plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli-package plugins unlink
  $ cli-package plugins remove

EXAMPLES
  $ cli-package plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.11/src/commands/plugins/uninstall.ts)_

## `cli-package plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cli-package plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli-package plugins unlink
  $ cli-package plugins remove

EXAMPLES
  $ cli-package plugins unlink myplugin
```

## `cli-package plugins update`

Update installed plugins.

```
USAGE
  $ cli-package plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.11/src/commands/plugins/update.ts)_
<!-- commandsstop -->
