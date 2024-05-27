import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  number | undefined,
  ThunkConfig<string>>(
    'articleComments/fetchCommentsByArticleId',
    async (
      articleId,
      { rejectWithValue, extra },
    ) => {
      if (articleId == null || Number.isNaN(articleId)) {
        return rejectWithValue('error');
      }
      try {
        const { data } = await extra.api.get<Comment[]>('/comments', {
          params: {
            articleId,
            _expand: 'user',
          },
        });

        if (!data) {
          throw new Error();
        }

        return data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
