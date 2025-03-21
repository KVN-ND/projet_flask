from flask import Flask, render_template, request, redirect, url_for
import random
app = Flask(__name__)

def get_chaussure_par_filtre(*filtre) :
    print(filtre)
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

def get_chaussure_par_nom(nom) :
    return random.choice(get_chaussure_par_filtre())
    # Si la chaussure n'est pas trouvée, afficher une page d'erreur 404
    if chaussure is None:
        return "Chaussure non trouvée", 404
    
    # Si la chaussure est trouvée, rendre le template avec ses informations
    return render_template('chaussure_nom.html', chaussure=chaussure)

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