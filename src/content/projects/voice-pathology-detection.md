---
title: 'Voice Disorder Detection Using Deep Learning'
description: 'A dual-branch deep learning model for voice pathology classification, published at IEEE ICIRCA 2025.'
tech:
  - CNN
  - MFCC
  - TensorFlow
  - React
link: 'https://voicepathologydetection.netlify.app/'
repo: 'https://github.com/pr4vndevhubX/Voice-Pathology-Analysis'
order: 2
publishDate: 2025-07-08
---

## Brief

Detecting voice pathologies from raw audio is a two-signal problem: what a spectrogram looks like, and what the acoustic signal measures. Most approaches lean on only one.

## Approach

A dual-branch fusion model combines a spectrogram-based CNN — transfer learning from EfficientNetB0, ResNet50V2, and DenseNet121 — with 60 handcrafted acoustic features (MFCCs, spectral centroid, bandwidth, rolloff, contrast, pitch jitter, harmonics-to-noise ratio). The classification threshold is calibrated via probability tuning rather than a fixed cutoff.

A pretrained ECAPA-TDNN speaker-embedding model adds auxiliary gender classification. The ensemble reaches 94.02% classification accuracy, deployed as a FastAPI inference service with a React frontend, and published as peer-reviewed research at IEEE ICIRCA 2025.
