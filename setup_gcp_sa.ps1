$ErrorActionPreference = "Stop"
$PROJECT_ID = "learners-global-school"
$SA_NAME = "github-deploy-sa"
$SA_EMAIL = "$SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"

Write-Host "Setting up Service Account for project: $PROJECT_ID"

# Create Service Account
Write-Host "Creating Service Account: $SA_NAME..."
try {
    gcloud iam service-accounts create $SA_NAME --display-name="GitHub Actions Deploy SA" --project=$PROJECT_ID --quiet
} catch {
    Write-Host "Service account might already exist, proceeding..."
}

# Assign Roles
Write-Host "Assigning Role: Cloud Run Admin..."
gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:$SA_EMAIL" --role="roles/run.admin" --project=$PROJECT_ID --quiet

Write-Host "Assigning Role: Artifact Registry Writer..."
gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:$SA_EMAIL" --role="roles/artifactregistry.writer" --project=$PROJECT_ID --quiet

Write-Host "Assigning Role: Service Account User..."
gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:$SA_EMAIL" --role="roles/iam.serviceAccountUser" --project=$PROJECT_ID --quiet

# Generate Key
Write-Host "Generating JSON Key..."
gcloud iam service-accounts keys create gcp-key.json --iam-account=$SA_EMAIL --project=$PROJECT_ID --quiet

Write-Host "Success! Key saved to gcp-key.json"
Write-Host "Copy the content of gcp-key.json to your GitHub Secret: GCP_SA_KEY"
