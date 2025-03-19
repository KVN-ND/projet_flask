from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route("/")
def start():
    return render_template('form.html')

@app.route("/index")
def index():
    return render_template('index.html', data = AffichageIdentite() )

@app.route("/Nike")
def Nike():
    return render_template('Nike.html')

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

def AffichageIdentite():
    return('prénon', 'nom', 'date','marque favorite')

def AffichagePhoto():
    return ('photo aléatoire de chaussures comme photo de profil d utilisateur')

def get_chaussure_par_filtre(**filtre) :
    return [
        {
            'nom': 'New Balance 574',
            'prix': 90,
            'couleur': 'Bleu',
            'image': '/static/images/nb574.jpg',
            'lien': 'https://www.newbalance.fr/nb574',
            'taille': '41-44'
        },
        {
            'nom': 'New Balance 997',
            'prix': 130,
            'couleur': 'Noir',
            'image': '/static/images/nb997.jpg',
            'lien': 'https://www.newbalance.fr/nb997',
            'taille': '42-45'
        },
        {
            'nom': 'New Balance 990',
            'prix': 180,
            'couleur': 'Gris',
            'image': '/static/images/nb990.jpg',
            'lien': 'https://www.newbalance.fr/nb990',
            'taille': '40-43'
        }
    ]

@app.route('/balance')
def balance():
    # Rendre le template avec la liste de chaussures
    return render_template('balance.html', chaussures=get_chaussure_par_filtre())

app.run(host='localhost', port=8000, debug=True)