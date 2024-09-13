import type { Schema, Attribute } from '@strapi/strapi';

export interface CourseTopicContent extends Schema.Component {
  collectionName: 'components_course_topic_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {};
}

export interface CourseTopicTopic extends Schema.Component {
  collectionName: 'components_course_topic_topics';
  info: {
    displayName: 'topic';
    description: '';
  };
  attributes: {
    Topic: Attribute.String;
    Content: Attribute.Component<'course-topic.content'>;
  };
}

export interface VideoTopicsVideoTopic extends Schema.Component {
  collectionName: 'components_video_topics_video_topics';
  info: {
    displayName: 'VideoTopics';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    videoUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'course-topic.content': CourseTopicContent;
      'course-topic.topic': CourseTopicTopic;
      'video-topics.video-topic': VideoTopicsVideoTopic;
    }
  }
}
