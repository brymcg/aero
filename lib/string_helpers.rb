class String
  def dasherize
    self.gsub(" & ", "-").tr(' ', '-').downcase
  end

  def underscore
    self.gsub(/::/, '/').
    gsub(" & ", "_").
    gsub(' ', '_').
    # gsub(/([A-Z]+)([A-Z][a-z])/,'\1_\2').
    gsub(/([a-z\d])([A-Z])/,'\1_\2').
    tr("-", "_").
    downcase
  end

  def titleize
      self.capitalize!  # capitalize the first word in case it is part of the no words array
      words_no_cap = ["and", "or", "the", "over", "to", "the", "a", "but"]
      phrase = self.split(" ").map { |word|
        if words_no_cap.include?(word) 
            word
        else
            word.capitalize
        end
      }.join(" ")
    phrase  # returns the phrase with all the excluded words
  end
end