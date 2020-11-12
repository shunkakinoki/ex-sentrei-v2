SECRETS_VERSION = 1

secrets-create-all: secrets-create-alpha secrets-create-beta secrets-create-main secrets-create-local secrets-create-production

secrets-create-alpha:
	gcloud secrets create functions_alpha_env --data-file="alpha.env.json" --locations=us-central1 --replication-policy="user-managed"

secrets-create-beta:
	gcloud secrets create functions_beta_env --data-file="beta.env.json" --locations=us-central1 --replication-policy="user-managed"

secrets-create-main:
	gcloud secrets create functions_main_env --data-file="main.env.json" --locations=us-central1 --replication-policy="user-managed"

secrets-create-local:
	gcloud secrets create web_local_env --data-file=".env.local" --locations=us-central1 --replication-policy="user-managed"

secrets-create-production:
	gcloud secrets create web_production_env --data-file=".env.production.local" --locations=us-central1 --replication-policy="user-managed"

secrets-delete-all: secrets-delete-alpha secrets-delete-beta secrets-delete-main secrets-delete-local secrets-delete-production

secrets-delete-alpha:
	gcloud secrets delete functions_alpha_env

secrets-delete-beta:
	gcloud secrets delete functions_beta_env

secrets-delete-main:
	gcloud secrets delete functions_main_env

secrets-delete-local:
	gcloud secrets delete web_local_env

secrets-delete-production:
	gcloud secrets delete web_production_env

secrets-get-all: secrets-get-alpha secrets-get-beta secrets-get-main secrets-get-local secrets-get-production

secrets-get-alpha:
	gcloud secrets versions access $(SECRETS_VERSION) --secret=functions_alpha_env > alpha.env.json

secrets-get-beta:
	gcloud secrets versions access $(SECRETS_VERSION) --secret=functions_beta_env > beta.env.json

secrets-get-main:
	gcloud secrets versions access $(SECRETS_VERSION) --secret=functions_main_env > main.env.json

secrets-get-local:
	gcloud secrets versions access $(SECRETS_VERSION) --secret=web_local_env > .env.local

secrets-get-production:
	gcloud secrets versions access $(SECRETS_VERSION) --secret=web_production_env > .env.production.local

secrets-list-all: secrets-list-alpha secrets-list-beta secrets-list-main secrets-list-local secrets-list-production

secrets-list-alpha:
	gcloud secrets versions list functions_alpha_env --limit=1

secrets-list-beta:
	gcloud secrets versions list functions_beta_env --limit=1

secrets-list-main:
	gcloud secrets versions list functions_main_env --limit=1

secrets-list-local:
	gcloud secrets versions list web_local_env --limit=1

secrets-list-production:
	gcloud secrets versions list web_production_env --limit=1

secrets-set-all: secrets-set-alpha secrets-set-beta secrets-set-main secrets-set-local secrets-set-production

secrets-set-alpha:
	gcloud secrets versions add "functions_alpha_env" --data-file="alpha.env.json"

secrets-set-beta:
	gcloud secrets versions add "functions_beta_env" --data-file="beta.env.json"

secrets-set-main:
	gcloud secrets versions add "functions_main_env" --data-file="main.env.json"

secrets-set-local:
	gcloud secrets versions add "web_local_env" --data-file=".env.local"

secrets-set-production:
	gcloud secrets versions add "web_production_env" --data-file=".env.production.local"

firestore-delete-alpha:
	yarn run local:alpha
	yarn run firebase firestore:delete --all-collections

firestore-delete-beta:
	yarn run local:beta
	yarn run firebase firestore:delete --all-collections
