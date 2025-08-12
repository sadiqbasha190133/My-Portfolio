from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context
from decouple import config as env_config  # rename to avoid confusion with Alembic's config

# Alembic Config object
alembic_config = context.config

# Load logging configuration
if alembic_config.config_file_name is not None:
    fileConfig(alembic_config.config_file_name)

# Import your models' metadata
from database import Base
from models import *  # Ensure models are imported so Alembic sees them

target_metadata = Base.metadata

# Get database URL from .env
DATABASE_URL = env_config("DATABASE_URL")

# Override alembic.ini sqlalchemy.url dynamically
alembic_config.set_main_option("sqlalchemy.url", DATABASE_URL)


def run_migrations_offline() -> None:
    """Run migrations without a DB connection (generates SQL)."""
    context.configure(
        url=DATABASE_URL,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Run migrations with a DB connection."""
    connectable = engine_from_config(
        alembic_config.get_section(alembic_config.config_ini_section),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
