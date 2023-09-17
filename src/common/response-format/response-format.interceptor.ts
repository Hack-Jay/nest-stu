import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseFormatInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((res) => {
        res = JSON.parse(JSON.stringify(res));
        // 全局消除
        this.delValue(res, 'password');
        this.delValue(res, 'salt');
        return {
          code: 200,
          result: res,
        };
      }),
    );
  }

  delValue(data, targetKey) {
    for (let key in data) {
      if (key === targetKey) {
        delete data[key];
      } else if (typeof data[key] === 'object') {
        this.delValue(data[key], targetKey);
      }
    }
    return data;
  }
}
