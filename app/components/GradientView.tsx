import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

const GradientViewVariants = {
  pink: ["#ff9bd0", "#ff73aa"],
  teal: ["#8df3ed", "#34d9d1"],
  violet: ["#c1b2ff", "#9b87ff"],
};
interface GradientViewProps extends Omit<LinearGradientProps, "colors"> {
  variant: keyof typeof GradientViewVariants;
}
export const GradientView: React.FC<GradientViewProps> = ({
  variant,
  ...props
}) => {
  return (
    <LinearGradient
      {...props}
      locations={[0, 1]}
      colors={GradientViewVariants[variant]}
    />
  );
};
