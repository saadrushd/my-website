---
title: matrixcli
githubrepo: https://github.com/saadnpq/matrixcli
description: command line matrix chat client
date: 2019-05-01
tags: [chat, command line, python]
---
matrixcli is a simple [matrix](https://matrix.org/blog/home/) client
based on the
[matrix-python-sdk](https://github.com/matrix-org/matrix-python-sdk). if
you wonder how this is useful please see
[applications](#applications)

installation
============

you can install matrixcli using setup.py in root project directory. This
will also install all needed dependencies.

``` {.shell}
git clone https://github.com/saadnpq/matrixcli.git
cd ./matrixcli 
sudo ./install.sh
```

this will put the matrixcli script in your path, install a template
config.py file in /etc/matrixcli and systemd unit file in
/lib/systemd/user

for ubuntu users you have to install python3-setuptools first before
running the above commands

``` {.shell}
sudo apt install python3-setuptools
```

to enable the systemd service you can run the following.

``` {.shell}
systemctl --user enable --now matrixcli
```

configuration file
==================

the account configuration is done through the config.py file in either
one of the following locations sorted by precedence

1.  custom file specified using the -c option
2.  \$HOME/.config/matrixcli
3.  /etc/matrixcli

this is a one account sample configuration.

``` {.python}
def password_eval():
    return "Y0UrPredIctabLePA$$w0ord"

accounts=[{ "server":"https://matrix.org/",
              "username":"putYourUserNameHere",
              "passeval":password_eval }] 

# the password_eval function can be named any thing as long as 
# it matches the function definition 

ignore_rooms = ["room_id", "another_room_id"] 
# note: room_id not room_alias (run matrixcli rooms to get the room_id)

```

the configuration file should have an `accounts` variable which holds a
list of dictionaries where every dictionary consists of the account
information server, username and password eval

the rationale behind defining a function that returns the password value
is that if you don\'t want to write your password in plain text you can
write any python code you wish that generates or reads the password from
an encrypted file or a key ring

the ignore~rooms~ list contains rooms that you want to be ignored when
calculating unread messages and in listen mode

if you don\'t want to make a configuration file at all, you can pass the
server, username and password through command line arguments. see
*usage*

multi account configuration
---------------------------

suppose you have the following configuration file

``` {.python}
def account1_password_eval():
    return "account1secretpassword"

def account2_matrixorg_password_eval():
    return "account2secretpassword"

def account3_password_eval_any_name():
    return "yXkdsjhslkjhdlksjhffffffkkssskjsdhkljhssdc"

accounts=[

        { "server":"https://example.com",
          "username":"account1",
          "passeval":account1_password_eval },

        { "server":"https://matrix.org",
          "username":"account2",
          "passeval":account2_matrixorg_password_eval},

        { "server":"https://example.com",
          "username":"account3",
          "passeval":account3_password_eval_any_name },]

ignore_rooms = ["room_id", "another_room_id"] 
```

if you didn\'t specify any command line option, the program will use the
first account in the accounts list. to use any other account its enough
to pass the -u or --username option to the command with the username of
that account.

for example

``` {.shell}
matrixcli -u account3 getrooms
```

that command will login with the parameters of the third account.

if you have two or more accounts with the same username but with
different servers. you can specify the --server option to norrow down
the possible accounts to the account you want.

applications
============

below are the ways i personally use matrixcli,

desktop notifications
---------------------

the first motive to make this program was that i didn\'t want to keep
riot webpage open or to run an electron app just for notifications.

you can enable the systemd service, to get notifications for events as
they come.

``` {.shell}
systemctl --user enable --now matrixcli
```

![](/images/screenshots/notifications.png)

status bars
-----------

using `matrixcli unread` you write a module for any status bar to
display unread messages. here is a simple example for polybar

``` {.yaml}
[module/matrix]
type = custom/script
exec = matrixcli unread -f 2> /dev/null
tail = true
interval = 30
format = <label>
label = M[%output%]
format-underline = #268bd2
```

![](/images/screenshots/polybar.jpg)

M\[6\] here indicates 6 unread messages

sendmail for matrix
-------------------

for example i have this cron job that sends every day a random song from
my music directory to a specific room.

``` {.shell}
0 0 * * * /usr/local/bin/matrixcli send -r '!OSPeUVrwMKbIrLQuBX:matrix.org' $(tree /home/pi/musiqa -fi | grep ".*.mp3" | shuf | sed 1q)
```

and i use it in many scripts on remote servers to notify me about a
script output or just when something goes wrong.

how to use
==========

for a list of the subcommands and options run

``` {.shell}
matrixcli --help 
```

output:

``` {.example}
#usage: matrixcli [-h] [-s SERVER] [-u USERNAME] [-p PASSWORD] [-c CONFIG]
                 {send,listen,rooms,unread,tail} ...

command line matrix client

optional arguments:
  -h, --help            show this help message and exit
  -s SERVER, --server SERVER
                        server to login to
  -u USERNAME, --username USERNAME
                        username to login with
  -p PASSWORD, --password PASSWORD
                        the password
  -c CONFIG, --config CONFIG
                        custom configuration file

subcommands:
  {send,listen,rooms,unread,tail}
    send                send something to a room
    listen              listen forever for events
    rooms               get all joined rooms
    unread              get unread notifications
    tail                print last messages
```

to list the options of a specific sub command, (e.g. send)

``` {.shell}
matrixcli send --help 
```

rooms
-----

every sub-command that supposed to act on a specific room accepts the
-r/--room-id optional argument which takes the room-id to act upon, or
-a/--room~alias~ which takes a room alias.

to get a room-id of a room run:

    matrixcli rooms

outputs the following (for my account).

``` {.example}
logging in ....
logged in ....
0 : momenamr : !ocOmULdomkoJWYzXts:matrix.org
1 : mahmoudhafez : !fCXcmULzIohNQomvXD:saadnpq.com
2 : Emacs Matrix Client : !ZrZoyXEyFrzcBZKNis:matrix.org
3 : elm3alem zaki : !OaBjEnLTTVqGpqrPES:matrix.org
4 : matrix-python-sdk : !YHhmBTmGBHGQOlGpaZ:matrix.org
5 : Emacs : !PWxnIIDhCBAbNItsSN:matrix.org
6 : moatazomar : !LsBUkYVYJignwCpACn:saadnpq.com
```

if you didn\'t specify the room-id or room-alias through the command
line, the program will prompt you with your joined rooms when it needs
to.

listen
------

``` {.shell}
matrixcli listen
```

listens forever for events and outputs incoming messages to both stdout
and os notifications, if you are running this command on a headless
system or the program failed to send notifications for some reason, it
will output events only to stdout without complaining.

you can press C-c to quit the listen mode.

there is also a systemd service installed with the program that uses
`matrixcli listen`, to enable it you can run the following.

``` {.shell}
systemctl --user enable --now matrixcli
```

tail
----

returns the last n messages of a room.

``` {.shell}
matrixcli tail -h
```

``` {.example}
usage: matrixcli tail [-h] [-r ROOM_ID | -a ROOM_ALIAS] [-f] [-n [1-100]]

optional arguments:
  -h, --help            show this help message and exit
  -r ROOM_ID, --room-id ROOM_ID
                        specify the room id
  -a ROOM_ALIAS, --room-alias ROOM_ALIAS
                        specify the room by room alias
  -f, --follow          wait for messages and print them as they come
  -n [1-100], --messages [1-100]
                        print the last specified messages
```

the option -f prints the last messages but wait for new messages and
print them as they come.

you can also send messages while in follow mode by typing the message
you want to send and hit enter to send it.

send
----

``` {.shell}
matrixcli send --help 
```

``` {.example}
usage: matrixcli send [-h] [-r ROOM_ID | -a ROOM_ALIAS] [-t | -f] content

positional arguments:
  content

optional arguments:
  -h, --help            show this help message and exit
  -r ROOM_ID, --room-id ROOM_ID
                        specify the room id
  -a ROOM_ALIAS, --room-alias ROOM_ALIAS
                        specify the room by room alias
  -t, --text            force the program to treat the content as text message
  -f, --file            force the program to treat the content as a file
```

the send command takes the content you want to send as a positional
arguments, the program first sees if the passed text represent a file
that exists in the filesystem, if so it will try to guess its MIME type
based on the extension to correctly preview the content on the
receiver\'s end. if the passed text does not represent any file on the
filesystem the program will treat it as a text message.

to force the program to treat the content as a file or a text you can
specify the optional arguments --file or --text.

unread
------

``` {.shell}
matrixcli unread --help 
```

``` {.example}
usage: matrixcli unread [-h] [-f] [-r ROOM_ID | -a ROOM_ALIAS]

optional arguments:
  -h, --help            show this help message and exit
  -f, --follow          don't close connection and print the number of unread
                        messages whenever updated
  -r ROOM_ID, --room-id ROOM_ID
                        specify the room id
  -a ROOM_ALIAS, --room-alias ROOM_ALIAS
                        specify the room by room alias
```

outputs unread messages for room~id~ or all rooms (except those in
ignore~rooms~) if no room~id~ or room~alias~ specified
