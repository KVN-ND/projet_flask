DROP TABLE IF EXISTS Compte;
DROP TABLE IF EXISTS Taille;
DROP TABLE IF EXISTS Couleur;
DROP TABLE IF EXISTS Marque;
DROP TABLE IF EXISTS Chaussure;


CREATE TABLE Compte (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    prénom VARCHAR(20) NOT NULL,
    nom VARCHAR(255) NOT NULL
);

CREATE TABLE Couleur (
    idCouleur INTEGER PRIMARY KEY,
    nomCouleur VARCHAR(20) NOT NULL
);

CREATE TABLE Taille (
    idTaille INTEGER PRIMARY KEY AUTOINCREMENT,
    valeurTaille VARCHAR(50) NOT NULL
);

CREATE TABLE Marque (
    idMarque INTEGER PRIMARY KEY AUTOINCREMENT,
    marque VARCHAR(20) NOT NULL
);

CREATE TABLE Chaussure(
    idChaussure INTEGER PRIMARY KEY AUTOINCREMENT,
    nom VARCHAR(50),
    prix DECIMAL(4, 2) NOT NULL,
    Idtaille INTEGER,
    idMarque INTEGER,
    idCouleur INTEGER,
    urlimage TEXT,
    FOREIGN KEY (Idtaille) REFERENCES Taille(Idtaille) ON DELETE CASCADE,
    FOREIGN KEY (idMarque) REFERENCES Marque(idMarque) ON DELETE CASCADE,
    FOREIGN KEY (idCouleur) REFERENCES Couleur(idCouleur) ON DELETE CASCADE
);


INSERT INTO Couleur (nomCouleur) VALUES ('blanc');
INSERT INTO Couleur (nomCouleur) VALUES ('bleu');
INSERT INTO Couleur (nomCouleur) VALUES ('noir');
INSERT INTO Couleur (nomCouleur) VALUES ('beige');
INSERT INTO Couleur (nomCouleur) VALUES ('rose');
INSERT INTO Couleur (nomCouleur) VALUES ('rouge');
INSERT INTO Couleur (nomCouleur) VALUES ('jaune');
INSERT INTO Couleur (nomCouleur) VALUES ('marron');

INSERT INTO Taille (valeurTaille) VALUES ('37-40');
INSERT INTO Taille (valeurTaille) VALUES ('41-44');
INSERT INTO Taille (valeurTaille) VALUES ('45-48');

INSERT INTO Marque (marque) VALUES ('Nike');
INSERT INTO Marque (marque) VALUES ('Balance');
INSERT INTO Marque (marque) VALUES ('Asics');
INSERT INTO Marque (marque) VALUES ('Adidas');

INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('shox r4 floral', 149.99 ,2 ,1 , 4,'https://images.stockx.com/images/Nike-Shox-R4-Flat-Pewter-Floral-Womens.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738266672');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('Nike Air Max A-COLD-WALL', 414.00 ,3 ,1 ,2,'https://images.stockx.com/images/Nike-Air-Max-Plus-A-COLD-WALL-Varsity-Royal-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('initiator', 79.99 ,1 ,1 ,1 ,'https://images.stockx.com/images/Nike-Initiator-White-Photon-Dust-Womens.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1736779954');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('New Balance 9060', 120.00 ,2 ,2 ,8 ,'https://images.stockx.com/images/New-Balance-9060-Mushroom-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('TN tiempo', 191.00,3 ,1 ,6 ,'https://images.stockx.com/images/Nike-Air-Max-Plus-Tiempo-Team-Red-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('asics gel nyc', 920.00,1 , 3,6 ,'https://images.stockx.com/images/ASICS-Gel-NYC-Pink-Cream-Pure-Silver-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('nocta hot step 2', 494.89,1 , 1,3 ,'https://images.stockx.com/images/Nike-Hot-Step-2-Drake-NOCTA-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('Samba', 130.00,3 ,4 ,7,'https://images.stockx.com/images/adidas-Samba-LT-Preloved-Yellow-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('Air max 95', 347.00,2 ,1 ,6,'https://images.stockx.com/images/Air-Max-95-Anatomy-of-Air-GID-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('Air max dn', 119.00,3 ,1 ,6,'https://images.stockx.com/images/Nike-Air-Max-Dn-Burgundy-Crush-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738271477');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('Nb 1906 L', 163.00 ,2 ,2 ,3,'https://images.stockx.com/images/New-Balance-1906L-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1742418697');
INSERT INTO Chaussure (nom, prix,Idtaille,idMarque,idCouleur,urlimage) VALUES ('Shox r2', 230.00 ,2 ,1 ,1,'https://images.stockx.com/images/Nike-Shox-Ride-2-Light-Bone-Turf-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358');