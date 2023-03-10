from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

def create_session():
    engine = create_engine('postgresql://<username>:<password>@<hostname>/<database_name>')
    Session = sessionmaker(bind=engine)
    session = Session()
    return session
