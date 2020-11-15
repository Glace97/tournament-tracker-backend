#![allow(clippy::toplevel_ref_arg)]

use chrono::NaiveDateTime;
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use tracing::error;

#[derive(Debug, PartialEq, sqlx::FromRow, Deserialize, Serialize)]
pub struct Match {
    // Id isn't expected in the incoming messages
    // so it should still be serializable
    #[serde(default)]
    pub id: i64,
    pub player_one: i64,
    pub player_two: i64,
    pub tournament_id: i32,
    pub class: String,
    pub start_time: NaiveDateTime,
}

#[derive(Clone)]
pub struct MatchStore {
    pub pool: PgPool,
}

impl MatchStore {
    #[tracing::instrument(name = "Inserting match", skip(self))]
    pub async fn insert_match(&self, match_data: Match) -> Result<i64, sqlx::Error> {
        let row = sqlx::query!(
            "INSERT INTO matches (tournament_id, player_one, player_two, class, start_time) 
                    VALUES ($1,$2,$3,$4,$5)
                    RETURNING id",
            match_data.tournament_id,
            match_data.player_one,
            match_data.player_two,
            match_data.class,
            match_data.start_time,
        )
        .fetch_one(&self.pool)
        .await
        .map_err(|err| {
            error!("Failed to insert match {}", err);
            err
        })?;
        Ok(row.id)
    }

    #[tracing::instrument(name = "Fetching match", skip(self))]
    pub async fn get_match(&self, match_id: i64) -> Result<Match, sqlx::Error> {
        let match_row = sqlx::query_as!(Match, "SELECT * FROM matches WHERE id = $1", match_id)
            .fetch_one(&self.pool)
            .await
            .map_err(|err| {
                error!("Failed to fetch match {}", err);
                err
            })?;
        Ok(match_row)
    }
}