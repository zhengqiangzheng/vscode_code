package ocagent_test

import (
	"testing"
	"time"

	"golang.org/x/tools/internal/telemetry"
	"golang.org/x/tools/internal/telemetry/export/ocagent"
	"golang.org/x/tools/internal/telemetry/metric"
)

func TestEncodeMetric(t *testing.T) {
	start, _ := time.Parse(time.RFC3339Nano, "1970-01-01T00:00:00Z")
	end, _ := time.Parse(time.RFC3339Nano, "1970-01-01T00:00:30Z")

	tests := []struct {
		name  string
		data  telemetry.MetricData
		start time.Time
		want  string
	}{
		{
			name: "nil data",
			want: `null`,
		},
		{
			name: "Int64Data cumulative",
			data: &metric.Int64Data{
				Info: &metric.Scalar{
					Name:        "int",
					Description: "int metric",
					Keys:        []interface{}{"hello"},
				},
				Rows: []int64{
					1,
					2,
					3,
				},
				EndTime: &end,
			},
			start: start,
			want: `{
				"metric_descriptor": {
					"name": "int",
					"description": "int metric",
					"type": 4,
					"label_keys": [
						{
							"key": "hello"
						}
					]
				},
				"timeseries": [
					{
						"start_timestamp": "1970-01-01T00:00:00Z",
						"points": [
							{
								"timestamp": "1970-01-01T00:00:30Z",
								"int64Value": 1
							}
						]
					},
					{
						"start_timestamp": "1970-01-01T00:00:00Z",
						"points": [
							{
								"timestamp": "1970-01-01T00:00:30Z",
								"int64Value": 2
							}
						]
					},
					{
						"start_timestamp": "1970-01-01T00:00:00Z",
						"points": [
							{
								"timestamp": "1970-01-01T00:00:30Z",
								"int64Value": 3
							}
						]
					}
				]
			}`,
		},
		{
			name: "Int64Data gauge",
			data: &metric.Int64Data{
				Info: &metric.Scalar{
					Name:        "int-gauge",
					Description: "int metric gauge",
					Keys:        []interface{}{"hello"},
				},
				IsGauge: true,
			},
			start: start,
			want: `{
				"metric_descriptor": {
					"name": "int-gauge",
					"description": "int metric gauge",
					"type": 1,
					"label_keys": [
						{
							"key": "hello"
						}
					]
				}
			}`,
		},
		{
			name: "Float64Data cumulative",
			data: &metric.Float64Data{
				Info: &metric.Scalar{
					Name:        "float",
					Description: "float metric",
					Keys:        []interface{}{"world"},
				},
				Rows: []float64{
					1.5,
					4.5,
				},
				EndTime: &end,
			},
			start: start,
			want: `{
				"metric_descriptor": {
					"name": "float",
					"description": "float metric",
					"type": 5,
					"label_keys": [
						{
							"key": "world"
						}
					]
				},
				"timeseries": [
					{
						"start_timestamp": "1970-01-01T00:00:00Z",
						"points": [
							{
								"timestamp": "1970-01-01T00:00:30Z",
								"doubleValue": 1.5
							}
						]
					},
					{
						"start_timestamp": "1970-01-01T00:00:00Z",
						"points": [
							{
								"timestamp": "1970-01-01T00:00:30Z",
								"doubleValue": 4.5
							}
						]
					}
				]
			}`,
		},
		{
			name: "Float64Data gauge",
			data: &metric.Float64Data{
				Info: &metric.Scalar{
					Name:        "float-gauge",
					Description: "float metric gauge",
					Keys:        []interface{}{"world"},
				},
				IsGauge: true,
			},
			start: start,
			want: `{
				"metric_descriptor": {
					"name": "float-gauge",
					"description": "float metric gauge",
					"type": 2,
					"label_keys": [
						{
							"key": "world"
						}
					]
				}
			}`,
		},
		{
			name: "HistogramInt64",
			data: &metric.HistogramInt64Data{
				Info: &metric.HistogramInt64{
					Name:        "histogram int",
					Description: "histogram int metric",
					Keys:        []interface{}{"hello"},
					Buckets: []int64{
						0, 5, 10,
					},
				},
				Rows: []*metric.HistogramInt64Row{
					{
						Count: 6,
						Sum:   40,
						Values: []int64{
							1,
							2,
							3,
						},
					},
				},
				EndTime: &end,
			},
			start: start,
			want: `{
				"metric_descriptor": {
					"name": "histogram int",
					"description": "histogram int metric",
					"type": 6,
					"label_keys": [
						{
							"key": "hello"
						}
					]
				},
				"timeseries": [
					{
						"start_timestamp": "1970-01-01T00:00:00Z",
						"points": [
							{
								"timestamp": "1970-01-01T00:00:30Z",
								"distributionValue": {
									"count": 6,
									"sum": 40,
									"bucket_options": {
										"explicit": {
											"bounds": [
												0,
												5,
												10
											]
										}
									},
									"buckets": [
										{
											"count": 1
										},
										{
											"count": 2
										},
										{
											"count": 3
										}
									]
								}
							}
						]
					}
				]
			}`,
		},
		{
			name: "HistogramFloat64",
			data: &metric.HistogramFloat64Data{
				Info: &metric.HistogramFloat64{
					Name:        "histogram float",
					Description: "histogram float metric",
					Keys:        []interface{}{"hello"},
					Buckets: []float64{
						0, 5,
					},
				},
				Rows: []*metric.HistogramFloat64Row{
					{
						Count: 3,
						Sum:   10,
						Values: []int64{
							1,
							2,
						},
					},
				},
				EndTime: &end,
			},
			start: start,
			want: `{
				"metric_descriptor": {
					"name": "histogram float",
					"description": "histogram float metric",
					"type": 6,
					"label_keys": [
						{
							"key": "hello"
						}
					]
				},
				"timeseries": [
					{
						"start_timestamp": "1970-01-01T00:00:00Z",
						"points": [
							{
								"timestamp": "1970-01-01T00:00:30Z",
								"distributionValue": {
									"count": 3,
									"sum": 10,
									"bucket_options": {
										"explicit": {
											"bounds": [
												0,
												5
											]
										}
									},
									"buckets": [
										{
											"count": 1
										},
										{
											"count": 2
										}
									]
								}
							}
						]
					}
				]
			}`,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := ocagent.EncodeMetric(tt.data, tt.start)
			if err != nil {
				t.Fatal(err)
			}
			checkJSON(t, got, []byte(tt.want))
		})
	}
}
