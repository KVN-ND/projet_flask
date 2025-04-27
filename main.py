from flask import Flask, render_template, request, redirect, url_for
import random
import sqlite3
app = Flask(__name__)

def get_chaussure_par_filtre(*filtre) :
    print(filtre)
    return [
        {
            'nom': 'New Balance 9060 ',
            'prix': 130,
            'couleur': 'Marron',
            'image': 'https://images.stockx.com/images/New-Balance-9060-Mushroom-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358',
            'lien': 'https://limitedresell.com/4024-new-balance-9060-mushroom.html?variant=75017&epik=dj0yJnU9cEFNWHVEcDh3SzJKS1lqeDQzZFpTUi14WVhoNXVrZnUmcD0wJm49cEtOOEdsQkNvYmhLM0UwaXBGUmdZQSZ0PUFBQUFBR2dPR253',
            'taille': '42-45'
        },
        {
            'nom': 'TN Tiempo ',
            'prix': 130,
            'couleur': 'rouge',
            'image': 'https://images.stockx.com/images/Nike-Air-Max-Plus-Tiempo-Team-Red-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358',
            'lien': 'https://stockx.com/fr-fr/nike-air-max-plus-tiempo-team-red?country=FR&currencyCode=EUR&size=14&utm_source=af&utm_medium=imp&utm_campaign=2213966&impactSiteId=Rq03XSUC-xyKWFvXtoQH2SVcUksRkYRREW4MWA0&clickid=Rq03XSUC-xyKWFvXtoQH2SVcUksRkYRREW4MWA0&utm_term=Rq03XSUC-xyKWFvXtoQH2SVcUksRkYRREW4MWA0&utm_content=_1023691&irgwc=1&irclickid=Rq03XSUC-xyKWFvXtoQH2SVcUksRkYRREW4MWA0&ir_campaignid=9060&ir_adid=1023691&ir_partnerid=2213966',
            'taille': '42-45'
        },
        {   'nom': 'Shox R4 floral',
            'prix': 90,
            'couleur': 'Beige',
            'image': 'https://images.stockx.com/images/Nike-Shox-R4-Flat-Pewter-Floral-Womens.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738266672',
            'lien': 'https://www.nike.com/fr/t/chaussure-shox-r4-pour-wQWPrJH5/HV0934-001',
            'taille': '41-44'
        },
        {
            'nom': 'Nike Air Max A-COLD-WALL ',
            'prix': 130,
            'couleur': 'Bleu',
            'image': 'https://images.stockx.com/images/Nike-Air-Max-Plus-A-COLD-WALL-Varsity-Royal-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358',
            'lien': 'https://stockx.com/fr-fr/nike-air-max-plus-a-cold-wall-varsity-royal?msockid=3232c88822cb6ec001a3dcdf23726f79',
            'taille': '42-45'
        },
        { 
            'nom': 'Nike Initiator',
            'prix': 180,
            'couleur': 'Blanc ',
            'image': 'https://images.stockx.com/images/Nike-Initiator-White-Photon-Dust-Womens.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1736779954',
            'lien': 'https://www.nike.com/fr/t/chaussure-initiator-pour-pHUePZkd/FZ9020-100',
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