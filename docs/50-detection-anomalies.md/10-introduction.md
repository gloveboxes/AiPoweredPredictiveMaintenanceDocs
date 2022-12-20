# Introduction

Azure Anomaly Detector is a service that detects anomalies automatically in time series data. It supports two scenarios: **Change Point Detection** and **Anomaly Detection**. Change Point Detection identifies when data points are different from the trend of the series, while Anomaly Detection identifies when data points are significantly different from the expected behavior, or outliers.

This lab will walk you through the steps to use Azure Anomaly Detector to detect anomalies in IoT telemetry data. The lab will use the HVAC simulator app or the Azure Sphere HVAC app that you deployed in the previous section. The lab will use the Azure Anomaly Detector REST API to detect anomalies in the telemetry data.
