import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import SectionTitle from "@/components/global/SectionTitle";
import ReviewCard from "@/components/reviews/ReviewCard";
import { deleteReviewAction, fetchProductReviewsByUser } from "@/utils/actions";

async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();
  if (reviews.length === 0) {
    return <SectionTitle text="you have no reviews yet" />;
  }
  return (
    <>
      <SectionTitle text="your Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { image, name } = review.product;
          const reviewInfo = { image, name, comment, rating };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}
export default ReviewsPage;

 function DeleteReview({ reviewId }: { reviewId: string }) {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
