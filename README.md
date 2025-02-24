# Fraud Detection Project ![phishing-icon-48](https://github.com/user-attachments/assets/1ed687d1-5842-4246-8621-058389f16323)


## Team Members
- Afra
- Anna
- Rodoshi 
- Seemal 

## Project Overview
This project focuses on detecting fraud through two different models:
1. **Email Phishing Detection**: Using Natural Language Processing (NLP) for binary classification.
2. **Front End Extension**: Creating chrome extension

## Table of Contents
- [Fraud Detection Project ](#fraud-detection-project-)
  - [Team Members](#team-members)
  - [Project Overview](#project-overview)
  - [Table of Contents](#table-of-contents)
  - [1. Dataset](#1-dataset)
    - [Email Phishing Dataset](#email-phishing-dataset)
    - [Website URL Dataset](#website-url-dataset)
  - [2. Email Phishing Detection Model](#2-email-phishing-detection-model)
  - [4. Implementation Plan](#4-implementation-plan)
  - [5. Evaluation Metrics](#5-evaluation-metrics)
  - [6. References](#6-references)
  - [Notes \& Next Steps](#notes--next-steps)

---

## 1. Dataset
### Email Phishing Dataset
- Description: This dataset was compiled by researchers to study phishing email tactics. It combines emails from a variety of sources to create a comprehensive resource for analysis.
- Source: https://www.kaggle.com/datasets/naserabdullahalam/phishing-email-dataset?select=Nazario.csv
- Preprocessing Steps:
  - Tokenization
  - Stopword Removal
  - Vectorization (TF-IDF / Word Embeddings)

### Website URL Dataset
- Description: [Brief dataset details]
- Source: [Dataset Link]
- Preprocessing Steps:
  - Extract URL tokens
  - Feature Engineering (Domain Age, HTTPS, etc.)
  
---

## 2. Email Phishing Detection Model
- **Approach**: NLP-based binary classification (Spam vs. Not Spam)
- **Algorithms Considered**:
  - Logistic Regression
  - Naive Bayes
  - Support Vector Machine (SVM)
- **Libraries Used**: 
  - `BERT`, `pandas`, `Scikit-learn`, `TensorFlow/PyTorch`
- **Pipeline**:
  1. Data Cleaning
  2. Text Preprocessing
  3. Model Training & Tuning
  4. Evaluation

---

## 4. Implementation Plan
| Task | Assigned To | Deadline |
|------|------------|----------|
| Data Collection | [Name] | [Date] |
| Preprocessing | [Name] | [Date] |
| Model Training | [Name] | [Date] |
| Evaluation | [Name] | [Date] |
| Deployment | [Name] | [Date] |

---

## 5. Evaluation Metrics
- **Accuracy**
- **Precision, Recall, F1-Score**
- **ROC-AUC Curve**

---

## 6. References
- [Tutorial 1: SVM](https://www.geeksforgeeks.org/classifying-data-using-support-vector-machinessvms-in-python/)
- [Tutorial 2: SVM More](https://medium.com/@bedigunjit/simple-guide-to-text-classification-nlp-using-svm-and-naive-bayes-with-python-421db3a72d34)
- [Tutorial 2: NLP Model Basics](https://medium.com/analytics-vidhya/natural-language-processing-nlp-workflow-tutorial-for-binary-classification-in-sci-kit-learn-b9f94c6aaf14)
- [Tutorial 3: Multinomial Naive Bayes](https://www.youtube.com/watch?v=Thz4WzC3UdM)
- [Tutorial 4: Naive Bayes](https://www.geeksforgeeks.org/applying-multinomial-naive-bayes-to-nlp-problems/)
- [Tutorial 5: Logistic Regression in Python](https://realpython.com/logistic-regression-python/#multi-variate-logistic-regression)
- [Tutorial 6: Text Classification Using Linear Regression](https://www.geeksforgeeks.org/text-classification-using-logistic-regression/)
- Logistic Regression Template:
  ```
  from sklearn.linear_model import LogisticRegression
  from sklearn.preprocessing import StandardScaler
  from sklearn.metrics import accuracy_score
  
  # Instantiate the transformer object
  std_scaler = StandardScaler()
  
  # Fit to data (subtract mean and divide by SD for each column)
  X = std_scaler.fit_transform(X)
  
  # Instantiate the model object
  logit = LogisticRegression(fit_intercept = True, max_iter=1000, penalty = 'none')
  
  # Fit the model to the data
  logit.fit(X, t.ravel()) # Use reval so array is passed to the function
  
  # Examine the coefficients and intercept
  print('Logistic Regression Coefficients:\n',logit.coef_)
  print('Intercept:\n', logit.intercept_)
  
  # Get fitted values from training set
  t_train_preds_lr = logit.predict(X)
  
  # Print train and test errors
  train_acc = accuracy_score(t, t_train_preds_lr)
  
  print('Train Accuracy: ',train_acc)
  ```
---

## Notes & Next Steps
- regex for emails: [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
- regex for textbody: (?:\r?\n\r?\n)([\s\S]+)
