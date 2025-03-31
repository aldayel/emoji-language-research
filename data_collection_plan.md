# Emoji Data Collection Plan

## Overview
This document outlines our approach to collecting and preprocessing emoji data for our research on whether emojis are emerging as a new form of language in digital communication.

## Data Sources

### 1. Twitter API
Based on our research, Twitter is an excellent source for emoji usage data. We'll use the Twitter API endpoints to collect tweets containing emojis:

- **Twitter/search_twitter**: To search for tweets containing specific emojis or emoji-related keywords
- **Twitter/get_user_tweets**: To collect tweets from specific users for more targeted analysis

### 2. Existing Datasets
We'll also explore existing emoji datasets that may be available:
- Unicode Consortium emoji data
- Emoji sentiment lexicons
- Previously published research datasets (with proper attribution)

### 3. Supplementary Sources
- Reddit API (for comparison with Twitter data)
- Instagram API (if accessible)
- Public messaging datasets

## Data Collection Methodology

### Twitter Data Collection
1. **Search Queries**:
   - Search for tweets containing popular emojis (😂, ❤️, 😭, 👍, etc.)
   - Search for tweets with multiple emojis to analyze emoji sequences
   - Search for tweets discussing emojis (keywords: "emoji", "emojis", etc.)

2. **Parameters**:
   - Collect 1000-5000 tweets per emoji category
   - Include metadata: timestamp, language, country (when available)
   - Store both the tweet text and the emoji usage context

3. **Language and Geographic Coverage**:
   - Target at least 10 different languages
   - Ensure geographic diversity (North America, Europe, Asia, etc.)
   - Compare emoji usage across different cultural contexts

### Data Storage Structure
```
/data
  /raw
    /twitter
      emoji_tweets_[date].json
    /other_sources
      [source]_data_[date].json
  /processed
    emoji_frequency.csv
    emoji_cooccurrence.csv
    emoji_by_language.csv
    emoji_by_country.csv
```

## Preprocessing Steps

1. **Data Cleaning**:
   - Remove spam and bot accounts
   - Filter out retweets to avoid duplication
   - Handle encoding issues with emojis

2. **Emoji Extraction**:
   - Extract emojis from tweet text
   - Normalize emoji representations
   - Map to Unicode standard identifiers

3. **Feature Engineering**:
   - Calculate emoji frequency
   - Identify emoji co-occurrence patterns
   - Extract contextual information (surrounding text)
   - Compute emoji sequence patterns

4. **Annotation**:
   - Label emojis with sentiment categories (positive, negative, neutral)
   - Categorize by function (emotional, object representation, symbolic)
   - Tag with cultural context when relevant

## Ethical Considerations

1. **Privacy**:
   - Only collect publicly available tweets
   - Remove personally identifiable information
   - Aggregate data when reporting results

2. **Representation**:
   - Ensure diverse representation of languages and cultures
   - Acknowledge limitations in data collection
   - Avoid cultural bias in interpretation

## Implementation Plan

1. **Setup Twitter API Access**:
   - Register for Twitter API access
   - Set up authentication
   - Test API endpoints

2. **Develop Collection Scripts**:
   - Create Python scripts for data collection
   - Implement rate limiting and error handling
   - Set up scheduled collection for time series analysis

3. **Build Processing Pipeline**:
   - Develop data cleaning scripts
   - Create emoji extraction and normalization functions
   - Implement feature engineering pipeline

4. **Quality Assurance**:
   - Validate data completeness
   - Check for biases in collection
   - Ensure proper emoji encoding throughout pipeline

## Timeline
- API setup and testing: 1 day
- Initial data collection: 2-3 days
- Data preprocessing: 2 days
- Feature engineering: 2-3 days
- Quality validation: 1 day

## References
1. Tran, V., & Matsui, T. (2023). COVID-19 case prediction using emotion trends via Twitter emoji analysis: A case study in Japan.
2. Kejriwal, M., Wang, Q., Li, H., & Wang, L. (2021). An empirical study of emoji usage on Twitter in linguistic and national contexts.
