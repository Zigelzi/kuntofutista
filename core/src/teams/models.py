from datetime import datetime
from src import db

Column = db.Column
Model = db.Model


class Team(Model):
    id = Column(db.Integer, primary_key=True)
    name = Column(db.String(50), nullable=False)
    # TODO: Add Club
    street = Column(db.String(50), nullable=False)
    city = Column(db.String(50), nullable=False)
    postal_code = Column(db.Integer, nullable=False)
    created_at = Column(db.DateTime, default=datetime.utcnow(), nullable=False)
