import * as React from 'react';
import {useEffect, useRef, useState} from "react";
import {AddTagButton, Container, Label, Tag, TagContainer, TagInput} from './tags.style';

type UpdatePayload = {
  tagList: string[];
}

type UpdateCallback = (payload: UpdatePayload) => void;

type Props = {
  onUpdate: UpdateCallback;
  tagList: string[];
};

export const TagList: React.FC<Props> = props => {
  const { onUpdate } = props;
  const [tags, setTags] = useState(props.tagList);
  const [isTagInputToggled, toggleTagInput] = useState(false);
  const tagInput = useRef(null);

  const addTag = (newTag: string) => {
    const updatedTags: string[] = [...tags, newTag];
    setTags(updatedTags);
    onUpdate({ tagList: updatedTags });
  };

  const removeTag = (target: string) => {
    const updatedTags: string[] = tags.filter(tag => tag !== target);
    setTags(updatedTags);
    onUpdate({ tagList: updatedTags });
  };
  const toggle = () => toggleTagInput(!isTagInputToggled);
  const handleTagInputOnBlur = () => {
    if (tagInput.current.value.length !== 0) {
      addTag(tagInput.current.value);
    }
    toggle();
  };

  useEffect(() => {
    if (isTagInputToggled) tagInput.current && tagInput.current.focus();
  });

  return (
    <Container>
      <Label>Tags</Label>
      <TagContainer>
        {[...tags].map(tag => {
          return (
            <Tag key={tag} onClick={() => removeTag(tag)}>
              {tag}
            </Tag>
          );
        })}
        {isTagInputToggled ? (
          <TagInput
            onBlur={handleTagInputOnBlur}
            ref={tagInput}
            onChange={e => {
              tagInput.current.style.width = `${e.target.value.length + 1}ch`;
            }}
          />
        ) : (
          <AddTagButton
            onClick={() => {
              toggle();
            }}
          >
            +
          </AddTagButton>
        )}
      </TagContainer>
    </Container>
  );
};
