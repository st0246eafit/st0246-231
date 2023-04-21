# ST0246 Bases de datos, profesor: Edwin Montoya, emontoya@eafit.edu.co, 2023-1
#
# Instalación de software en una máquina con Ubuntu 22.04:

## 1. clonar el repositorio de la materia:

    git clone https://github.com/st0246eafit/st0246-231.git
  
## 2. Instalar MySQL versión 8.0.30 o sup:

ref: https://linuxhint.com/install-mysql-on-ubuntu-22-04/

    sudo apt update -y
    sudo apt install mysql-server -y
    sudo systemctl enable mysql
    sudo systemctl start mysql

    sudo mysql

    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Eafit2023.';
    FLUSH PRIVILEGES;
    QUIT;

    mysql -u root -p
    Password: Eafit2023.
    > Sentencias SQL
    > quit

### conexión de mysql workbench al servidor en aws

$ ssh -i "vockey1.pem" -L 3306:127.0.0.1:3306 ubuntu@ec2-54-89-21-204.compute-1.amazonaws.com

consideraciones: 
1. verificar que el puerto local no este ocupado, en este caso el 3306, si está ocupado coloque el 3307.

$ ssh -i "vockey1.pem" -L 3307:127.0.0.1:3306 ubuntu@ec2-54-89-21-204.compute-1.amazonaws.com

2. cambie la dirección IP pública a su propio servidor, cambie:ec2-54-89-21-204.compute-1.amazonaws.com



## 3. instalar nodejs

ver pagina: https://nodejs.org/
hay 2 versiones: 16.16.0 LTS y 18.7.0 Actual (esta será la de trabajo de este demo)

### instalar version nodejs 18.x, ver página: https://techviewleo.com/how-to-install-node-js-18-lts-on-ubuntu/

    sudo apt update

    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

    sudo apt install nodejs

### probar versiones:

    node -v
    
    npm -v