# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "scotch/box"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.hostname = "test.dev"
  config.vm.synced_folder "./www/", "/var/www", :mount_options => ["dmode=777", "fmode=666"]
  config.vm.provision "shell", inline: <<-SHELL
      echo 'echo "upload_max_filesize = 100M" >> /etc/php5/apache2/conf.d/user.ini' | sudo -s
      echo 'echo "post_max_size = 100M" >> /etc/php5/apache2/conf.d/user.ini' | sudo -s
      sudo service apache2 restart
  SHELL
  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "2048"
  end

end