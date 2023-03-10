from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from your_module import Post, Base

DATABASE_URI = 'postgresql://user:password@localhost:5432/posts_db'
engine = create_engine(DATABASE_URI)
Session = sessionmaker(bind=engine)
session = Session()
