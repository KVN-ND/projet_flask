from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def form():
    return render_template('form.html')


@app.route('/form', methods=['GET'])
def form():
    return render_template('form.html')


@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':

        name = request.form['prenom']
        nom = request.form['nom']
        
        print(f'prénom: {name}, Nom: {nom}') 
         
        return redirect(url_for('index.html'))

# Route pour la page d'accueil
@app.route('/')
def accueil():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)


app.run(host='localhost', port=8000)