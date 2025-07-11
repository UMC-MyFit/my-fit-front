interface Props {
  keyword: string;
}

const mockHashtags = [
  "프론트 개발",
  "프론트 개발과 협력",
  "프론트 개발 작업",
  "프론트 개발 전문직",
  "프론트 개발 지식",
  "프론트 개발 포트폴리오",
];

const HashtagResult = ({ keyword }: Props) => {
  const filtered = mockHashtags.filter((tag) => tag.includes(keyword));

  return (
    <ul className="space-y-3">
      {filtered.map((tag, idx) => (
        <li key={idx} className="text-blue-500 text-body1">
          #{tag}
        </li>
      ))}
    </ul>
  );
};

export default HashtagResult;
