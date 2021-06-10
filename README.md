# tournament-tracker-backend [![Coverage Status](https://coveralls.io/repos/github/Nehliin/tournament-tracker-backend/badge.svg)](https://coveralls.io/github/Nehliin/tournament-tracker-backend) ![Rust](https://github.com/Nehliin/tournament-tracker-backend/workflows/Rust/badge.svg)
New updated and unfinished backend for the tournament-tracker web app

How to run:

1. Install docker
2. Install sqlx-cli: cargo install sqlx-cli --no-default-features --features postgres
2. Run ./scripts/init_db.sh
3. If missing or outdated sqlx-data.json: cargo sqxl prepare -- --bin app
4. cargo run