from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def form():
    return render_template('form.html')


# Route pour afficher le formulaire (page form.html)
@app.route("/form", methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        # Récupérer les données du formulaire
        prenom = request.form['prenom']
        nom = request.form['nom']
        age = request.form['age']

        print(f'Prénom: {prenom}, Nom: {nom}, Age: {age}')
        # Redirection vers la page d'accueil après soumission
        return redirect(url_for('accueil'))

    return render_template('form.html')

# Route pour afficher la page d'accueil (index.html)
@app.route("/")
def accueil():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
