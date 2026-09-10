# 黑客松立项评审系统（陈静版）

## 功能
- 学生：立项申请、编辑、提交、查看评审结果
- 评委：查看分配任务、评分（创新/技术/价值）、写评审意见
- 管理员：看板、立项管理、分配评委、评审结果排名

## 技术栈
Go + Gin + GORM；React + Vite + Tailwind；MySQL

## 启动
```
docker compose up -d
cd backend && go run ./cmd/server
cd frontend && npm install && npm run dev
```

## 内置管理员
admin@hackathon.com / admin123
