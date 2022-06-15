# Homework 07

Given what you have learned today with MVC structure, 

you need to implement the following schema in a backend project:

```json
{
      "courses_count":"number",
      "path_status":"Boolean",
      "learning_goals":["string"]
      "path_hours":"number",
      "publishing_status":"Boolean",
      "_id":"String",
      "color_hex":"String",
      "level":"String",
      "description":"String",
      "requirements":["String"] ,
      "url_id":"string",
      "title":"string",
      "updated_at":"Date",
      "created_at":"Date"
    },
```
the name of the collection should be courses

with the following packages only:

1- express    
2- mongoose   
3- nodemon    

you are required to add a crud operation to that structure an example values for you to test is this:

```json
{
      "courses_count": 4,
      "path_status": "OPEN",
      "learning_goals": [
        "استخدام لغة Dart",
        "بناء واجهات التطبيقات باستخدام Flutter",
        "إنشاء قواعد البيانات وربطها بالتطبيقات"
      ],
      "path_hours": 13,
      "publishing_status": "PUBLISHED",
      "id": "6cdcce31-988d-4018-978a-181d2c4c782b",
      "color_hex": "#1aa4db",
      "level": "JUNIOR",
      "description": "سنتعرف في المسار  على طريقة بناء تطبيقات الموبايل والويب باستخدام Flutter، حيث تبدأ رحلتك بتعلم لغة Dart ثم تنتقل لتعلم مبادئ وأساسيات بناء التطبيقات باستخدام Flutter، كما ستتعرف على طريقة استخدام قواعد البيانات واستخدام أنظمة التحكم بالإصدارات Git و GitHub.",
      "requirements": [
        "هذه الدورة لا تتطلب أي خبرة برمجية مسبقة"
      ],
      "url_id": "OHarLRCHae",
      "title": "تطوير تطبيقات Flutter"
    },

```

don't forget that timestamps are added automatically

Good Luck and Have Fun.
