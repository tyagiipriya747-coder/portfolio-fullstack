from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

# Database create
def create_table():
    conn = sqlite3.connect("portfolio.db")
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS contacts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        message TEXT
    )
    """)

    conn.commit()
    conn.close()

create_table()


@app.route('/')
def home():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():

    name = request.form["name"]
    email = request.form["email"]
    message = request.form["message"]

    conn = sqlite3.connect("portfolio.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO contacts(name,email,message) VALUES(?,?,?)",
        (name, email, message)
    )

    conn.commit()
    conn.close()

    return redirect("/")


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=10000)
