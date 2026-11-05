'use strict';
const CATEGORIES=[['foundation','언어·개발','01'],['ingestion','수집·연동','02'],['cdc','DB 변경 수집','03'],['messaging','메시지·이벤트','04'],['processing','계산·처리','05'],['transform','SQL 변환','06'],['orchestration','실행·예약','07'],['storage','파일 저장','08'],['format','파일·테이블 형식','09'],['database','DB·분석·조회','10'],['quality','품질·테스트','11'],['catalog','카탈로그·계보','12'],['observability','모니터링','13'],['infra','배포·운영','14'],['bi','BI·시각화','15'],['platform','통합·관리형','16']];
// Editorial summaries: name | category | role | strength | tradeoff | fit | official source | delivery | learning
const RAW=`Python|foundation|API 수집부터 파일 가공·자동화까지 연결하는 범용 언어|라이브러리와 연동 선택지가 풍부|환경·의존성·성능 관리가 필요|커스텀 수집기와 파이프라인 제어 코드|https://www.python.org/|코드|입문
SQL|foundation|테이블 데이터를 조회·조인·집계하는 언어|변환 로직을 선언적으로 표현|제품별 문법과 실행 계획 차이가 존재|분석 테이블과 데이터 품질 검사|https://www.postgresql.org/docs/current/tutorial-sql.html|언어|입문
Java|foundation|JVM에서 실행하는 범용 언어|Kafka 생태계와 서버 개발에 강점|간단한 수집 작업에는 코드량이 많아질 수 있음|Kafka Streams와 장시간 실행 서비스|https://dev.java/|코드|중급
Scala|foundation|함수형·객체지향을 결합한 JVM 언어|Spark와 JVM 생태계 활용|언어 학습과 빌드 관리 부담|Scala 기반 Spark 코드베이스|https://www.scala-lang.org/|코드|심화
Git|foundation|코드와 설정의 변경 이력 관리|협업·리뷰·되돌리기를 지원|대용량 데이터 자체를 관리하기에는 부적합|파이프라인·SQL·인프라 코드 버전 관리|https://git-scm.com/doc|개발도구|입문
Jupyter|foundation|코드·실행 결과·설명을 함께 담는 노트북|탐색과 시제품 작성이 편리|셀 실행 순서와 재현성을 관리해야 함|원본 데이터 탐색과 변환 실험|https://jupyter.org/|개발도구|입문
Airbyte|ingestion|커넥터로 여러 원본에서 저장소로 데이터 복제|수집기를 모두 직접 작성할 필요를 줄임|커넥터별 기능·품질·운영 제약 확인 필요|여러 SaaS와 DB 데이터를 분석 저장소에 통합|https://docs.airbyte.com/|혼합|중급
Fivetran|ingestion|관리형 커넥터 기반 데이터 이동 서비스|커넥터 운영 부담을 줄임|사용량 기반 비용과 지원 범위 검토 필요|적은 운영 인력으로 업무 시스템 연동|https://fivetran.com/docs|관리형|입문
dlt|ingestion|Python으로 수집·적재 파이프라인을 작성하는 라이브러리|커스텀 API 수집과 스키마 처리 연결|API 오류·호출 제한 등 원본 로직은 설계해야 함|Python 중심의 API 데이터 적재|https://dlthub.com/docs/intro|코드|입문
Kafka Connect|ingestion|Kafka와 외부 DB·저장소를 연결하는 프레임워크|커넥터 기반으로 데이터 입출력 표준화|워커·커넥터·스키마 운영 필요|Kafka에 DB 변경을 넣거나 저장소로 내보내기|https://kafka.apache.org/documentation/#connect|자가운영|중급
Apache NiFi|ingestion|데이터 이동·분기·변환을 흐름으로 구성|시각적인 라우팅과 흐름 추적|복잡한 흐름은 배포·버전 관리가 어려워질 수 있음|다양한 프로토콜의 수집·중계|https://nifi.apache.org/|자가운영|중급
Fluent Bit|ingestion|로그·지표를 수집해서 전달하는 에이전트|작은 자원 사용을 고려한 설계|복잡한 비즈니스 변환에는 별도 엔진이 적합|컨테이너·서버 로그 전달|https://docs.fluentbit.io/manual|자가운영|중급
Fluentd|ingestion|로그·이벤트 수집과 라우팅|플러그인으로 여러 목적지 연동|버퍼·메모리·플러그인 관리 필요|중앙 로그 수집 파이프라인|https://www.fluentd.org/|자가운영|중급
Logstash|ingestion|로그·이벤트 입력·변환·출력을 연결|필터와 Elastic 생태계 연동|JVM 자원과 파이프라인 성능 관리 필요|검색 저장소로 보내기 전 로그 파싱|https://www.elastic.co/guide/en/logstash/current/index.html|자가운영|중급
Scrapy|ingestion|웹페이지를 순회하며 데이터를 수집|크롤링·요청·추출 구조를 제공|사이트 변경·접근 정책·동적 렌더링 대응 필요|웹 기반 공개 데이터 수집|https://docs.scrapy.org/|코드|중급
HTTPX|ingestion|Python 동기·비동기 HTTP 클라이언트|API 호출을 세밀하게 제어|페이지네이션·재시도·상태 저장을 직접 설계|맞춤형 REST API 수집기|https://www.python-httpx.org/|코드|입문
Debezium|cdc|DB 변경 로그를 읽어 변경 이벤트를 생성|행 단위 변경과 삭제 포착|DB 권한·로그 보관·스냅샷·스키마 운영 필요|운영 DB 변경을 분석·검색 시스템에 반영|https://debezium.io/documentation/|자가운영|심화
AWS DMS|cdc|DB 마이그레이션과 지속 변경 복제 서비스|AWS 환경에서 관리형 복제|엔진별 타입·DDL 지원과 복제 지연 검토|DB 이전과 분석 저장소 복제|https://docs.aws.amazon.com/dms/|관리형|중급
Datastream|cdc|Google Cloud의 관리형 DB 변경 복제|Google Cloud 분석 환경과 연동|지원 원본·목적지·스키마 제약 확인 필요|DB 변경을 BigQuery·객체 저장소로 전달|https://cloud.google.com/datastream/docs|관리형|중급
Oracle GoldenGate|cdc|기업용 이기종 DB 복제·변경 데이터 전달|기업 DB 복제와 운영 시나리오 지원|라이선스·설정·운영 전문성 필요|Oracle 중심 핵심 업무 데이터 복제|https://docs.oracle.com/en/middleware/goldengate/|상용|심화
Flink CDC|cdc|DB 변경 수집과 Flink 처리·전달을 연결|CDC와 스트리밍 변환을 한 흐름에 구성|Flink 운영과 원본 커넥터 제약 이해 필요|DB 변경을 변환해 분석 저장소에 적재|https://nightlies.apache.org/flink/flink-cdc-docs-stable/|자가운영|심화
Apache Kafka|messaging|이벤트를 보관하고 여러 소비자가 독립적으로 읽는 플랫폼|재처리·소비자 분리·파티션 기반 확장|파티션·보관·복제·스키마 관리 필요|여러 시스템이 공유할 지속적인 이벤트 스트림|https://kafka.apache.org/intro/|혼합|심화
Apache Pulsar|messaging|영속 메시징과 이벤트 스트리밍 플랫폼|테넌트 분리와 다양한 구독 모델|브로커·저장 계층 등 운영 구성이 복잡|멀티테넌트 메시징·스트리밍|https://pulsar.apache.org/|혼합|심화
Redpanda|messaging|Kafka API 호환 스트리밍 플랫폼|Kafka 클라이언트 생태계 활용|기능·API 호환 범위와 배포 조건 확인 필요|Kafka 호환 이벤트 스트림 구성|https://docs.redpanda.com/|혼합|심화
RabbitMQ|messaging|큐와 라우팅 중심 메시지 브로커|작업 분배와 메시지 라우팅에 유연|큐·스트림 유형에 따라 보관·재처리 모델이 다름|백그라운드 작업과 서비스 간 메시징|https://www.rabbitmq.com/docs|혼합|중급
NATS JetStream|messaging|NATS에 메시지 영속성과 재전달을 추가|경량 메시징과 영속 소비 모델 연결|보관·전달 보장·소비자 설정 이해 필요|서비스 이벤트와 작업 전달|https://docs.nats.io/nats-concepts/jetstream|자가운영|중급
Kinesis Data Streams|messaging|AWS 관리형 이벤트 스트림|AWS 서비스와 스트리밍 연동|용량 모드·보관·처리 비용 고려|AWS에서 클릭·로그·센서 이벤트 수집|https://docs.aws.amazon.com/streams/latest/dev/|관리형|중급
Cloud Pub/Sub|messaging|Google Cloud 관리형 메시지 발행·구독|서버 운영을 줄이며 소비자 분리|순서·재전달·중복 처리 조건 이해 필요|Google Cloud 이벤트 수집과 비동기 전달|https://cloud.google.com/pubsub/docs|관리형|중급
Azure Event Hubs|messaging|Azure의 대규모 이벤트 수집 서비스|Azure 스트리밍 환경과 통합|파티션·처리량·보관 설정 검토|Azure의 로그·IoT 이벤트 수집|https://learn.microsoft.com/en-us/azure/event-hubs/|관리형|중급
Amazon SQS|messaging|작업 메시지를 보관하고 소비자에 전달하는 큐|작업 분배와 관리형 운영|이벤트 로그의 독립 재생과는 모델이 다름|수집·파일 처리 작업의 비동기 분배|https://docs.aws.amazon.com/sqs/|관리형|입문
pandas|processing|Python에서 표 데이터를 탐색·변환|풍부한 기능과 익숙한 생태계|메모리·자료형·연산 방식에 따른 성능 관리|한 장비에서 하는 데이터 탐색과 변환|https://pandas.pydata.org/docs/|코드|입문
Polars|processing|병렬 실행과 지연 평가를 제공하는 DataFrame 엔진|표현식·최적화·스트리밍 실행 활용|pandas와 다른 API·지원 연산 이해 필요|한 장비의 파일 변환과 집계 최적화|https://docs.pola.rs/|코드|중급
DuckDB|processing|프로그램 안에서 실행하는 분석용 SQL DB|Parquet·CSV를 SQL로 직접 분석|서버형 다중 사용자 DB와 운영 모델이 다름|로컬 분석·파일 기반 배치·내장 분석|https://duckdb.org/docs/|코드|입문
Apache Spark|processing|배치와 스트리밍 계산을 분산 실행|대규모 조인·집계와 다양한 데이터 연동|셔플·파티션·메모리·클러스터 관리 필요|단일 장비로 처리 기한을 맞추기 어려운 계산|https://spark.apache.org/docs/latest/|혼합|심화
PySpark|processing|Python에서 Spark를 사용하는 API|Python 코드로 분산 DataFrame·SQL 사용|Python UDF·직렬화·Spark 실행 모델 이해 필요|Python 팀의 Spark 파이프라인|https://spark.apache.org/docs/latest/api/python/|코드|심화
Apache Flink|processing|상태와 이벤트 시간을 다루는 분산 스트림 처리|윈도·상태·체크포인트를 활용한 연속 계산|상태 크기·체크포인트·지연 이벤트 운영 필요|실시간 집계·이상 탐지·이벤트 결합|https://flink.apache.org/what-is-flink/flink-architecture/|혼합|심화
Structured Streaming|processing|Spark SQL·DataFrame 모델로 스트림 처리|배치와 스트림의 API·처리 로직 공유|트리거·상태·체크포인트·싱크 보장 이해 필요|Spark 환경에서 지속적인 증분 집계|https://spark.apache.org/docs/latest/streaming/|코드|심화
Kafka Streams|processing|Kafka 이벤트를 처리하는 JVM 라이브러리|별도 처리 클러스터 없이 앱에 포함|Kafka 의존성과 상태 복구·재분배 이해 필요|Kafka 중심 서비스의 필터·조인·집계|https://kafka.apache.org/documentation/streams/|코드|심화
Apache Beam|processing|배치·스트리밍 처리 로직을 정의하는 모델·SDK|여러 러너에서 처리 로직 실행|러너별 지원·성능·운영 특성 차이|Dataflow 등에서 실행할 통합 처리 로직|https://beam.apache.org/documentation/|코드|심화
Dask|processing|Python 배열·DataFrame·작업의 병렬 실행|Python 생태계에서 병렬화 확장|태스크 그래프·파티션·메모리 관리 필요|Python 분석 코드의 병렬·분산 실행|https://docs.dask.org/|코드|중급
Ray|processing|Python 작업과 액터의 분산 실행|AI·ML 및 일반 작업 병렬화에 유연|분산 상태·리소스·장애 처리 설계 필요|병렬 추론·전처리·ML 워크로드|https://docs.ray.io/|코드|심화
dbt|transform|SQL 모델의 의존성·검사·문서화를 관리|분석 SQL을 모듈화하고 버전 관리|실제 성능·비용은 연결 엔진과 모델 설계에 좌우|웨어하우스의 정제·집계 테이블 관리|https://docs.getdbt.com/docs/introduction|혼합|중급
SQLMesh|transform|SQL 모델의 변경·환경·실행 계획 관리|변경 영향과 증분 처리 계획 지원|지원 엔진·모델 유형·환경 개념 학습 필요|SQL 파이프라인의 안전한 변경 관리|https://sqlmesh.readthedocs.io/|코드|중급
Dataform|transform|BigQuery 중심 SQL 변환 워크플로|SQL 의존성과 Google Cloud 연동|BigQuery 중심의 플랫폼 의존|Google Cloud 분석 테이블 관리|https://cloud.google.com/dataform/docs|관리형|중급
Apache Airflow|orchestration|작업을 DAG로 정의하고 예약·재시도·재실행|의존성이 있는 배치 작업의 실행 가시성|스케줄러·메타DB·배포 운영 필요|여러 수집·변환 작업의 순서와 과거 구간 실행|https://airflow.apache.org/docs/|혼합|중급
Dagster|orchestration|데이터 자산을 중심으로 의존성과 실행 관리|자산 계보·파티션·검사 연결|자산 모델과 프로젝트 구조 학습 필요|생성할 테이블·파일 중심 데이터 플랫폼|https://dagster.io/docs|혼합|중급
Prefect|orchestration|Python 워크플로의 실행·상태·재시도 관리|기존 Python 함수 흐름과 연결|워커·배포·실행 환경 설계 필요|Python 중심 자동화와 동적인 작업 흐름|https://docs.prefect.io/|혼합|중급
Kestra|orchestration|선언형 워크플로로 여러 시스템 연결|플러그인과 이벤트 기반 자동화|복잡한 로직의 코드·설정 분리 필요|언어가 다른 작업들의 통합 실행|https://kestra.io/docs|혼합|중급
Argo Workflows|orchestration|Kubernetes에서 컨테이너 작업 흐름 실행|컨테이너 단위 병렬 작업과 자원 활용|Kubernetes 운영 지식이 필요|이미 Kubernetes를 사용하는 배치 환경|https://argo-workflows.readthedocs.io/|자가운영|심화
AWS Step Functions|orchestration|상태 머신으로 서비스·작업 흐름 연결|AWS 서비스 통합과 재시도 표현|상태 전이·실행 방식·비용 제약 고려|Lambda·ECS·Glue 작업 연결|https://docs.aws.amazon.com/step-functions/|관리형|중급
cron|orchestration|시간표에 따라 명령 실행|단일 서버의 간단한 예약에 적합|의존성·중복 방지·이력·알림은 별도 구성|소수의 단순 배치 작업|https://man7.org/linux/man-pages/man5/crontab.5.html|자가운영|입문
Amazon S3|storage|AWS 객체 저장소|원본·파일·분석 데이터의 저장 계층|파일 수·접근·요청·전송 비용 설계 필요|AWS 데이터 레이크와 원본 보관|https://docs.aws.amazon.com/s3/|관리형|입문
Cloud Storage|storage|Google Cloud 객체 저장소|Google Cloud 분석·처리 서비스와 연동|버킷 위치·수명주기·접근·요청 비용 고려|Google Cloud 데이터 레이크|https://cloud.google.com/storage/docs|관리형|입문
ADLS Gen2|storage|Azure의 계층형 네임스페이스 지원 데이터 저장|Azure 분석 환경과 접근 제어 연동|권한·파일 구조·수명주기 설계 필요|Azure 데이터 레이크|https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction|관리형|중급
MinIO|storage|S3 API 호환 객체 저장소|자체 환경에서 객체 저장소 구축|디스크·복제·업그레이드·배포 조건 관리 필요|자체 인프라의 파일 저장 계층|https://www.min.io/|자가운영|중급
HDFS|storage|Hadoop 환경의 분산 파일 시스템|기존 Hadoop 처리 환경과 통합|노드·복제·디스크 운영 부담|기존 온프레미스 Hadoop 데이터 레이크|https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html|자가운영|심화
Parquet|format|열 단위로 데이터를 보관하는 파일 형식|분석용 컬럼 선택·압축에 적합|잦은 행 단위 수정은 추가 설계 필요|객체 저장소의 분석용 파일|https://parquet.apache.org/docs/|형식|입문
Avro|format|스키마 기반 레코드 직렬화 형식|스키마와 함께 데이터 교환|스키마 호환 정책과 소비자 지원 확인 필요|이벤트·레코드의 시스템 간 전달|https://avro.apache.org/docs/|형식|중급
Protobuf|format|스키마 기반 구조화 메시지 직렬화|타입 있는 효율적인 메시지 교환|스키마 컴파일·변경 규칙 관리 필요|서비스 이벤트·통신 메시지|https://protobuf.dev/|형식|중급
Apache Arrow|format|메모리의 열 형식 데이터 표현·교환|시스템 간 복사·변환 부담을 줄일 수 있음|파일 저장소나 분산 엔진 자체는 아님|분석 엔진·언어 사이의 데이터 교환|https://arrow.apache.org/docs/|형식|중급
Apache Iceberg|format|파일을 스냅샷·스키마 진화가 가능한 테이블로 관리|여러 처리 엔진이 같은 테이블 활용|카탈로그·파일 정리·컴팩션 운영 필요|다중 엔진 데이터 레이크하우스|https://iceberg.apache.org/|테이블형식|심화
Delta Lake|format|데이터 레이크 테이블의 트랜잭션·버전 관리|업데이트·병합·이력 관리|엔진별 기능 호환과 파일 유지보수 필요|Spark·Databricks 기반 레이크하우스|https://delta.io/|테이블형식|심화
Apache Hudi|format|변경·증분 처리를 고려한 레이크 테이블 관리|업서트와 증분 데이터 처리 지원|인덱스·테이블 유형·유지보수 튜닝 필요|변경이 많은 데이터를 레이크에 반영|https://hudi.apache.org/docs/overview/|테이블형식|심화
PostgreSQL|database|트랜잭션과 SQL을 지원하는 범용 관계형 DB|제약조건·확장·범용 생태계|큰 분석 쿼리와 서비스 트래픽의 자원 경쟁|서비스 원본 DB와 소규모 분석 저장소|https://www.postgresql.org/docs/|혼합|입문
MySQL|database|서비스 데이터를 저장하는 관계형 DB|폭넓은 서비스 개발 생태계|대규모 분석과 서비스 부하를 분리할 필요|업무·쇼핑몰 원본 DB|https://dev.mysql.com/doc/|혼합|입문
MongoDB|database|문서 형태의 데이터를 저장하는 DB|중첩·유연한 문서 모델|스키마 일관성·조인·분석 모델 별도 설계|문서 중심 서비스 데이터|https://www.mongodb.com/docs/|혼합|중급
BigQuery|database|Google Cloud의 관리형 분석 플랫폼|인프라 운영을 줄이고 대규모 SQL 분석|스캔량·용량 모델·파티션 설계가 비용에 영향|Google Cloud의 중앙 분석 저장소|https://cloud.google.com/bigquery/docs|관리형|중급
Snowflake|database|관리형 데이터 플랫폼·웨어하우스|저장과 계산 자원을 분리해 활용|웨어하우스 크기·실행 시간·비용 관리 필요|여러 팀이 공유하는 분석 데이터 플랫폼|https://docs.snowflake.com/|관리형|중급
Amazon Redshift|database|AWS의 분석용 데이터 웨어하우스|AWS 데이터 소스와 분석 통합|배치·물리 설계·용량·비용 최적화 필요|AWS 기반 SQL 분석 플랫폼|https://docs.aws.amazon.com/redshift/|관리형|중급
ClickHouse|database|열 지향 SQL 분석 DB|이벤트·로그의 대량 집계와 조회|정렬 키·파티션·업데이트 모델 이해 필요|빠른 이벤트 분석과 사용자 대시보드|https://clickhouse.com/docs/intro|혼합|중급
Apache Druid|database|이벤트·시계열 분석용 분산 DB|시간 기반 집계와 대화형 조회|수집·세그먼트·클러스터 운영 필요|로그·클릭·시계열 대시보드|https://druid.apache.org/docs/latest/design/|혼합|심화
Apache Pinot|database|낮은 조회 지연을 지향하는 분석 DB|사용자 대상 실시간 분석|인덱스·수집·클러스터 운영 필요|서비스 안에 들어가는 분석 기능|https://docs.pinot.apache.org/|혼합|심화
Trino|database|여러 저장소를 조회하는 분산 SQL 엔진|이기종 데이터 소스를 SQL로 연결|원본 성능·커넥터·분산 조인 비용에 영향|레이크와 여러 DB를 가로지르는 분석|https://trino.io/docs/current/overview.html|자가운영|심화
Amazon Athena|database|AWS의 서버리스 SQL 조회 서비스|객체 저장소 데이터를 서버 관리 없이 조회|파일 형식·파티션·스캔 비용 관리|S3 데이터에 대한 간헐적 SQL 분석|https://docs.aws.amazon.com/athena/|관리형|중급
OpenSearch|database|검색·로그·이벤트 분석 엔진|텍스트 검색과 로그 탐색|인덱스·샤드·메모리·보관 비용 관리|운영 로그 검색과 검색 서비스|https://docs.opensearch.org/|혼합|중급
Redis|database|메모리 중심 자료구조 저장소|캐시와 빠른 상태 조회|메모리 비용·영속성·일관성 조건 확인 필요|조회 캐시·카운터·일시적 상태|https://redis.io/docs/|혼합|중급
Great Expectations|quality|데이터가 규칙을 만족하는지 검사|검증 규칙을 코드로 표현·재사용|규칙·실행 시점·실패 대응을 직접 설계|적재 전후 결측·범위·형식 검사|https://docs.greatexpectations.io/|혼합|중급
Soda|quality|데이터 품질 검사·모니터링|선언형 검사와 품질 관찰|연결 엔진·상용 기능·실행 비용 확인 필요|분석 테이블의 품질 규칙 관리|https://docs.soda.io/|혼합|중급
Pandera|quality|DataFrame의 스키마·값 검증|Python 변환 코드 옆에서 검증|지원 백엔드·검증 비용 이해 필요|pandas·Polars 파이프라인의 입출력 검사|https://pandera.readthedocs.io/|코드|중급
Deequ|quality|Spark 위에서 대규모 데이터 품질 검사|분산 계산으로 품질 지표 생성|Spark 환경과 검사 비용 관리 필요|Spark 배치의 품질 검사|https://github.com/awslabs/deequ|코드|심화
pytest|quality|Python 코드의 동작을 검사하는 테스트 프레임워크|수집·변환 로직의 회귀 오류 방지|운영 데이터 전체의 품질 감시를 대신하지 않음|파서·중복 처리·변환 함수 테스트|https://docs.pytest.org/|개발도구|입문
DataHub|catalog|메타데이터·데이터 검색·계보 관리|소유자·설명·연관 데이터 탐색|메타데이터 수집과 실제 운영 연결 필요|조직의 테이블·대시보드 데이터 지도|https://docs.datahub.com/|혼합|심화
OpenMetadata|catalog|카탈로그·계보·품질·거버넌스 통합|메타데이터와 품질 정보를 함께 관리|커넥터·권한·메타데이터 최신성 관리|조직 데이터 검색과 변경 영향 파악|https://docs.open-metadata.org/|혼합|심화
OpenLineage|catalog|작업·실행·데이터셋의 계보를 표현하는 표준|여러 도구의 계보 이벤트 연결|저장·시각화할 백엔드와 연동 필요|파이프라인 간 데이터 흐름 추적|https://openlineage.io/docs/|표준|중급
Glue Data Catalog|catalog|AWS의 테이블·스키마 메타데이터 저장소|Athena·Glue 등과 테이블 정의 공유|크롤러 결과·스키마 변경·권한 관리 필요|AWS 데이터 레이크의 공통 카탈로그|https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html|관리형|중급
Unity Catalog|catalog|Databricks의 데이터·AI 자산 거버넌스|권한·검색·감사·계보 통합|플랫폼과 외부 저장소 권한 설계 필요|Databricks 조직 단위 데이터 관리|https://docs.databricks.com/en/data-governance/unity-catalog/|관리형|중급
Schema Registry|catalog|이벤트 스키마와 호환성 관리|생산자·소비자 간 데이터 계약 지원|호환 정책과 스키마 배포 절차 필요|Kafka 이벤트의 스키마 변경 관리|https://docs.confluent.io/platform/current/schema-registry/|혼합|중급
Prometheus|observability|시계열 운영 지표 수집·조회|처리량·지연·오류 수 관찰|지표 차원 수·보관·알림 설계 필요|파이프라인과 인프라 수치 모니터링|https://prometheus.io/docs/|자가운영|중급
Grafana|observability|여러 관측 데이터 소스의 대시보드|지표·로그를 연결하고 알림 구성|관찰할 데이터의 수집·저장은 별도 필요|운영 현황과 장애 대시보드|https://grafana.com/docs/|혼합|중급
OpenTelemetry|observability|지표·로그·추적을 계측·전달하는 표준·도구|관측 데이터 생성·전달 방식 통합|백엔드·샘플링·전달 경로 설계 필요|여러 서비스에 걸친 파이프라인 관찰|https://opentelemetry.io/docs/|표준|중급
Loki|observability|라벨 중심으로 로그를 저장·조회|Grafana와 연동한 로그 탐색|라벨 설계·보관·검색 특성 이해 필요|컨테이너·작업 로그 중앙화|https://grafana.com/docs/loki/|혼합|중급
Datadog|observability|인프라·앱의 관리형 관측 플랫폼|수집·대시보드·알림 통합|사용량·수집 범위에 따른 비용 관리|운영 인력이 적은 팀의 통합 모니터링|https://docs.datadoghq.com/|관리형|중급
CloudWatch|observability|AWS 로그·지표·알림 서비스|AWS 서비스와 기본 연동|로그량·보관·조회 비용 관리|AWS 파이프라인 운영 상태 확인|https://docs.aws.amazon.com/cloudwatch/|관리형|입문
Docker|infra|프로그램과 실행 환경을 컨테이너로 패키징|개발·실행 환경 차이를 줄임|이미지·보안·볼륨·네트워크 관리 필요|수집기·변환 작업의 일관된 실행|https://docs.docker.com/|운영도구|입문
Docker Compose|infra|여러 컨테이너 서비스를 한 설정으로 실행|로컬 DB·브로커·앱을 함께 구성|다중 서버의 고가용성 관리에는 추가 도구 필요|학습·개발·단일 호스트 구성|https://docs.docker.com/compose/|운영도구|입문
Kubernetes|infra|컨테이너 배치·복구·확장 관리|여러 작업의 자원·실행 환경 통합|클러스터·네트워크·권한 운영 복잡도|이미 컨테이너 플랫폼이 있는 조직|https://kubernetes.io/docs/|운영도구|심화
Helm|infra|Kubernetes 앱의 패키지·설정 관리|반복 설치와 환경별 설정 재사용|차트·릴리스·업그레이드 관리 필요|Kubernetes 데이터 도구 배포|https://helm.sh/docs/|운영도구|심화
Terraform|infra|클라우드·인프라 자원을 코드로 관리|변경 계획과 재현 가능한 자원 구성|상태·권한·프로바이더 변경 관리 필요|버킷·DB·실행 환경의 반복 구성|https://developer.hashicorp.com/terraform/docs|운영도구|중급
OpenTofu|infra|인프라를 선언형 코드로 관리|오픈소스 기반 인프라 변경 관리|상태·프로바이더·기존 코드 호환 확인 필요|인프라 코드 기반 클라우드 운영|https://opentofu.org/docs/|운영도구|중급
GitHub Actions|infra|코드 변경을 계기로 검사·빌드·배포 실행|저장소와 자동화 작업 연결|실행 권한·비밀정보·러너 비용 관리 필요|파이프라인 코드의 테스트와 배포|https://docs.github.com/en/actions|혼합|중급
Argo CD|infra|Git의 선언 상태를 Kubernetes에 반영|배포 상태 비교와 GitOps 운영|Kubernetes와 권한·동기화 정책 이해 필요|데이터 플랫폼 구성의 지속 배포|https://argo-cd.readthedocs.io/|자가운영|심화
Vault|infra|비밀정보 발급·보관·접근 제어|토큰·인증정보의 중앙 관리|Vault 자체의 가용성과 접근 정책 운영 필요|여러 파이프라인의 DB·API 자격증명 관리|https://developer.hashicorp.com/vault/docs|혼합|심화
Tableau|bi|시각적 데이터 탐색·대시보드|다양한 시각화와 사용자 분석 경험|라이선스·추출 갱신·지표 일관성 관리|업무 사용자의 분석과 보고|https://help.tableau.com/|상용|입문
Power BI|bi|데이터 모델·보고서·대시보드 플랫폼|Microsoft 환경과 보고서 배포 연동|모델·DAX·라이선스·갱신 조건 학습 필요|Microsoft 중심 조직의 BI|https://learn.microsoft.com/en-us/power-bi/|상용|중급
Looker|bi|공통 데이터 모델에 기반한 BI|지표와 분석 정의를 중앙 관리|모델링·LookML·플랫폼 비용 고려|팀 사이의 지표 정의 통일|https://cloud.google.com/looker/docs|상용|중급
Looker Studio|bi|연결한 데이터로 보고서·대시보드 작성|보고서 작성과 공유 진입이 쉬움|커넥터·캐시·갱신·대규모 조회 제약 검토|마케팅·간단한 업무 대시보드|https://cloud.google.com/looker/docs/studio|관리형|입문
Apache Superset|bi|SQL 데이터 소스의 분석·대시보드|여러 DB 연결과 시각화|인증·배포·쿼리 부하 운영 필요|자체 운영 BI와 SQL 분석|https://superset.apache.org/docs/intro|자가운영|중급
Metabase|bi|질문·SQL 기반 데이터 탐색·대시보드|간단한 업무 분석의 진입이 쉬움|복잡한 모델·권한·상용 기능 범위 확인 필요|팀 내부 지표와 소규모 분석 포털|https://www.metabase.com/docs/|혼합|입문
Streamlit|bi|Python으로 인터랙티브 데이터 앱 작성|분석 코드를 빠르게 화면으로 연결|앱 상태·접근 제어·동시 사용자 운영 필요|맞춤형 분석 도구와 프로토타입|https://docs.streamlit.io/|코드|입문
Databricks|platform|데이터 처리·SQL·레이크하우스·ML 통합 플랫폼|처리·협업·거버넌스를 한 환경에서 연결|계산 자원·플랫폼 기능·비용 관리 필요|Spark와 데이터·ML 작업이 함께 있는 조직|https://docs.databricks.com/|관리형|중급
Microsoft Fabric|platform|수집·처리·웨어하우스·BI 통합 플랫폼|OneLake와 여러 분석 경험 연결|용량·권한·워크로드 간 자원 관리 필요|Microsoft 중심 통합 데이터 플랫폼|https://learn.microsoft.com/en-us/fabric/fundamentals/microsoft-fabric-overview|관리형|중급
AWS Glue|platform|AWS의 관리형 데이터 통합·ETL|서버 운영을 줄이며 Spark 기반 작업 등 실행|시작 시간·작업 자원·데이터 구조·비용 고려|S3 중심 정기 데이터 변환|https://docs.aws.amazon.com/glue/|관리형|중급
Amazon EMR|platform|Spark 등 데이터 프레임워크의 관리형 실행|AWS에서 처리 환경을 유연하게 구성|배포 방식·용량·튜닝·비용 관리 필요|AWS의 대규모 분산 처리|https://docs.aws.amazon.com/emr/|관리형|심화
Amazon MSK|platform|AWS의 관리형 Kafka|Kafka 인프라 운영 일부를 줄임|파티션·소비자·스키마·비용 운영은 남음|AWS에서 Kafka 생태계 사용|https://docs.aws.amazon.com/msk/|관리형|심화
Amazon MWAA|platform|AWS의 관리형 Airflow|Airflow 제어부 운영 부담 감소|DAG·의존성·워커·환경 비용 관리 필요|AWS 작업의 Airflow 오케스트레이션|https://docs.aws.amazon.com/mwaa/|관리형|중급
Cloud Dataflow|platform|Beam 배치·스트리밍 작업의 관리형 실행|Google Cloud에서 실행 자원 운영 일부 자동화|Beam 모델·상태·자원 비용 이해 필요|Google Cloud의 이벤트 변환과 집계|https://cloud.google.com/dataflow/docs|관리형|심화
Cloud Dataproc|platform|Spark·Hadoop 작업의 관리형 실행|기존 Spark·Hadoop 코드 활용|실행 방식·클러스터·비용 최적화 필요|Google Cloud의 분산 배치 처리|https://cloud.google.com/dataproc/docs|관리형|심화
Cloud Composer|platform|Google Cloud의 관리형 Airflow|Google Cloud와 Airflow 실행 연결|DAG·환경 의존성·실행 비용 관리 필요|Google Cloud의 여러 배치 작업 연결|https://cloud.google.com/composer/docs|관리형|중급
Azure Data Factory|platform|Azure의 데이터 이동·작업 연결 서비스|커넥터와 시각적 파이프라인 구성|통합 런타임·활동별 제한·비용 검토|Azure와 기업 시스템 데이터 연동|https://learn.microsoft.com/en-us/azure/data-factory/|관리형|중급
Confluent Cloud|platform|관리형 Kafka와 스트리밍 서비스|브로커·커넥터 등 운영 부담 일부 감소|사용량·네트워크·기능별 비용 검토|운영 인력을 줄여 Kafka 생태계 활용|https://docs.confluent.io/cloud/current/|관리형|중급`;
const TOOLS=RAW.split('\n').map((line,i)=>{const[name,category,desc,pro,con,fit,url,delivery,level]=line.split('|');return{id:'tool-'+i,name,category,desc,pro,con,fit,url,delivery,level}});
const CORE=['Python','SQL','PostgreSQL','Parquet','pandas','Polars','DuckDB','Apache Airflow','dbt','Apache Kafka','Debezium','Apache Spark','Apache Flink','Apache Iceberg','Docker'];
const PALETTES=[['#3d5dde','#edf1ff'],['#b77536','#fff4e7'],['#8a5ac5','#f3edfc'],['#bc5668','#fff0f3'],['#348e76','#eaf8f1'],['#338fa4','#eaf7fa']];
