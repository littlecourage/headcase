class Pack < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  validates :category, presence: true

  

end