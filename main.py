from flask import Flask, render_template, request, redirect, url_for
import random
import sqlite3
app = Flask(__name__)
def get_db_connection():
    conn = sqlite3.connect('DATA.db')  # Nom de ton fichier DB
    conn.row_factory = sqlite3.Row     # Pour accéder aux colonnes par nom
    return conn
@app.route('/chaussures_db')
def chaussures_db():
    conn = get_db_connection()
    chaussures = conn.execute('SELECT * FROM chaussures').fetchall()
    conn.close()
    return render_template('chaussures_db.html', chaussures=chaussures)

def get_chaussure_par_filtre(*filtres):
    conn = get_db_connection()
    query = "SELECT * FROM chaussures"
    params = []

    if filtres:
        # On filtre sur couleur ou taille par exemple
        query += " WHERE " + " OR ".join(["couleur = ? OR taille = ?" for _ in filtres])
        for f in filtres:
            params.extend([f, f])

    try:
        cur = conn.execute(query, params)
        chaussures = cur.fetchall()
    except Exception as e:
        print("Erreur SQL :", e)
        chaussures = []  # Pas planter le site

    conn.close()
    return chaussures


def get_chaussure_par_nom(nom):
    conn = get_db_connection()
    chaussure = conn.execute('SELECT * FROM chaussures WHERE nom = ?', (nom,)).fetchone()
    conn.close()
    if chaussure is None:
        return "Chaussure non trouvée", 404
    return chaussure

def AffichageIdentite():
    return('prénon', 'nom', 'date','marque favorite')

def AffichagePhoto():
    return ('photo aléatoire de chaussures comme photo de profil d utilisateur')

@app.route("/")
def start():
    return render_template('form.html')

@app.route("/index")
def index():
    return render_template('index.html', data = AffichageIdentite() )

@app.route('/form', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        nom = request.form['nom']
        prenom = request.form['prenom']
        date_naissance = request.form['date_naissance']
        marque_preferee = request.form['marque_preferee']
        couleur_favorite = request.form['couleur_favorite']

        # Vous pouvez ajouter une logique pour sauvegarder ces informations dans une base de données
        print(f"Nom: {nom}, Prénom: {prenom}, Date de Naissance: {date_naissance}, Marque préférée: {marque_preferee}, Couleur favorite: {couleur_favorite}")

        return redirect(url_for('index'))  # Rediriger vers l'accueil après soumission

    return render_template('form.html')  # Afficher le formulaire

@app.route('/chaussure', methods=['GET', 'POST'])
def chaussure() :
    if request.method == 'POST' :
        # Rendre le template avec la liste de chaussures
        print(request.form)
        return render_template('chaussure.html', chaussures=get_chaussure_par_filtre(*list(request.form.keys())))
    else :
        return render_template('chaussure.html', chaussures = get_chaussure_par_filtre())

@app.route('/afficher_chaussure/<nom>')
def afficher_chaussure(nom) :
    chaussure = get_chaussure_par_nom(nom)
    return render_template('chaussures_nom.html', chaussure = chaussure)
app.run(host='localhost', port=8000, debug=True)
