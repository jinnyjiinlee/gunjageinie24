export default function Copyright({ mobile }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="text-center text-[10px] text-gray-600">
        © 2024 군자역 지니24 스터디카페
      </div>
    );
  }

  return (
    <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-600">
      © 2024 군자역 지니24 스터디카페. All rights reserved.
    </div>
  );
}
