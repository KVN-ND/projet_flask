from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route("/")
def start():
    return render_template('form.html')

@app.route("/index")
def index():
    return render_template('index.html')


@app.route('/form', methods=['GET', 'POST'])
def avis():
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

app.run(host='localhost', port=8000, debug=True)