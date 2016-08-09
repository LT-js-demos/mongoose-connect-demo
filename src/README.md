mongodb-connect-demo
====================


Operate mongodb with mongoose in Node.JS.

Install mongodb
---------------

Mac:

```
brew install mongo
```

Ubuntu 16.04:

See the end of this readme

Start it
---------

```
mkdir /tmp/mongodb-demo-db
mongod --dbpath /tmp/mongodb-demo-db
```

Setup this project
------------------

```
npm install
```

insert data (`ctrl+c` to terminate after running):

```
node ./src/insert.js
```
then you can see :`"save status: success"`

install Mongo Plugin in your WebStorm
-------------------------------------
```
Preferences->Plugins->Mongo Plugin
```

after that you need to set:
```
Preferences->Other settings->mongo servers->path to mongo shell:~/bin/mongod

```

after that you can `add a mongo server`

then `view->tool windows->Mongo Explorer`


Install on Ubuntu 16.04
-----------------------

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

